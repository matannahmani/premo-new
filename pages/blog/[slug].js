import { useRouter } from 'next/router'
import ErrorPage from 'next/error';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head';
import {Grid, Card, Image} from '@geist-ui/react'
import BlockContent from '../../components/blockContent';


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    {router.isFallback ? (null) : (
      <>
      <Head>
              <>
              <title>Premo| {post.title}</title>
              <meta name="description" content={post.seo}/>
              <meta name="keywords" content={post.tags}/>
              <meta name="author" content={post.author.name}/>
              </>
    </Head>
    <Grid.Container className="premozone-blog" direction="column">
      <Grid xs direction="column">
        <div className="premozone-blog-header">
          <h1>
          {post.title}
          </h1>
          <div className="post-info">
            <div>
            <Image className="img-avatar" src={post.author.picture} width={60} height={60}/>
            <span>{post.author.name}</span>
            </div>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="premozone-blog-content">
          <BlockContent blocks={post.content}/>
        </div>
      </Grid>
    </Grid.Container>
    </>
    )}
  </>
  )
}
export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
