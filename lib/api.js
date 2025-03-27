import { WP_API_URL } from "./constants"

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" }

  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}

// Get all posts with pagination
export async function getAllPosts(first = 100, after = null) {
  const data = await fetchAPI(
    `
    query AllPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            content
          }
        }
      }
    }
  `,
    {
      variables: {
        first,
        after,
      },
    },
  )

  const posts = data.posts.edges.map(({ node }) => {
    return {
      title: node.title,
      excerpt: node.excerpt,
      slug: node.slug,
      date: node.date,
      featuredImage: node.featuredImage?.node?.sourceUrl,
      categories: node.categories?.edges.map(({ node }) => node.name) || [],
      categorySlug: node.categories?.edges.map(({ node }) => node.slug) || [],
      content: node.content,
    }
  })

  return {
    posts,
    pageInfo: data.posts.pageInfo,
  }
}

// Get all pages
export async function getAllPages() {
  const data = await fetchAPI(`
    query AllPages {
      pages(first: 100) {
        edges {
          node {
            title
            slug
            content
            template {
              templateName
            }
          }
        }
      }
    }
  `)

  return data.pages.edges.map(({ node }) => {
    return {
      title: node.title,
      slug: node.slug,
      content: node.content,
      template: node.template?.templateName || "Default",
    }
  })
}

// Get all categories
export async function getAllCategories() {
  const data = await fetchAPI(`
    query AllCategories {
      categories(first: 100) {
        edges {
          node {
            name
            slug
            description
            posts {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  `)

  return data.categories.edges.map(({ node }) => {
    return {
      name: node.name,
      slug: node.slug,
      description: node.description,
      postCount: node.posts.nodes.length,
    }
  })
}

// Get posts by category
export async function getCategoryPosts(categorySlug, first = 20) {
  const data = await fetchAPI(
    `
    query CategoryPosts($categorySlug: String!, $first: Int!) {
      posts(first: $first, where: { categoryName: $categorySlug, orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        categorySlug,
        first,
      },
    },
  )

  return data.posts.edges.map(({ node }) => {
    return {
      title: node.title,
      excerpt: node.excerpt,
      slug: node.slug,
      date: node.date,
      featuredImage: node.featuredImage?.node?.sourceUrl,
      categories: node.categories?.edges.map(({ node }) => node.name) || [],
    }
  })
}

// Get a single post by slug
export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String!) {
      postBy(slug: $slug) {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        content
        author {
          node {
            name
            description
            avatar {
              url
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  )

  if (!data?.postBy) {
    return null
  }

  return {
    title: data.postBy.title,
    excerpt: data.postBy.excerpt,
    slug: data.postBy.slug,
    date: data.postBy.date,
    featuredImage: data.postBy.featuredImage?.node?.sourceUrl,
    categories: data.postBy.categories?.edges.map(({ node }) => node.name) || [],
    categorySlug: data.postBy.categories?.edges.map(({ node }) => node.slug) || [],
    content: data.postBy.content,
    author: data.postBy.author?.node
      ? {
          name: data.postBy.author.node.name,
          description: data.postBy.author.node.description,
          avatar: data.postBy.author.node.avatar?.url,
        }
      : null,
  }
}

// Get a single page by slug
export async function getPageBySlug(slug) {
  const data = await fetchAPI(
    `
    query PageBySlug($slug: String!) {
      pageBy(uri: $slug) {
        title
        slug
        content
        template {
          templateName
        }
      }
    }
  `,
    {
      variables: {
        slug,
      },
    },
  )

  if (!data?.pageBy) {
    return null
  }

  return {
    title: data.pageBy.title,
    slug: data.pageBy.slug,
    content: data.pageBy.content,
    template: data.pageBy.template?.templateName || "Default",
  }
}

// Get menu by location
export async function getMenuByLocation(location) {
  const data = await fetchAPI(
    `
    query MenuByLocation($location: MenuLocationEnum!) {
      menus(where: {location: $location}) {
        nodes {
          menuItems {
            edges {
              node {
                label
                url
                path
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        location,
      },
    },
  )

  if (!data?.menus?.nodes?.[0]) {
    return []
  }

  return data.menus.nodes[0].menuItems.edges.map(({ node }) => {
    return {
      label: node.label,
      url: node.url,
      path: node.path,
    }
  })
}

