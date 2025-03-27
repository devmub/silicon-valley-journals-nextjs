"use client"

import Head from "next/head"
import { useRouter } from "next/router"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import { formatDate } from "../../lib/utils"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"

export default function Post({ post }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{post.title} | Silicon Valley Journals</title>
        <meta name="description" content={post.excerpt.replace(/<[^>]*>/g, "")} />
      </Head>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center text-sm text-gray-500 mb-8">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.categories?.length > 0 && (
              <>
                <span className="mx-2">•</span>
                <span className="text-primary">{post.categories.join(", ")}</span>
              </>
            )}
          </div>

          {post.featuredImage && (
            <div className="mb-8">
              <img
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-auto rounded-lg" />
            </div>
          )}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug)

  return {
    props: { post },
    revalidate: 60, // Revalidate every 60 seconds
  }
}

