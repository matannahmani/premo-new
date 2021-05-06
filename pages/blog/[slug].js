import { useRouter } from 'next/router'
import ErrorPage from 'next/error';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head';
import {Grid, Card, Image, Text, Spacer} from '@geist-ui/react'
import Link from 'next/link'
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
              <meta name="description" content={post.seodesc}/>
              <meta name="keywords" content={post.seokeywords}/>
              <meta name="author" content={post.author.name}/>
              </>
    </Head>
    <Grid.Container className="premozone-blog" justify="space-evenly">
      <Grid className="premozone-blog-block" xs={24} sm={24} md={16} lg={14} xl={12} direction="column">
        <div className="premozone-blog-header">
            <Image src={post.coverImage} height={418} width={418}/>
          <div className="post-info">
            <div className="premo-text">
              <Image className="img-avatar" src={post.author.picture} width={60} height={60}/>
              <div style={{marginTop: '8px',flexDirection: 'column',marginLeft: '24px'}}>
                <span>Article by: {post.author.name} - {new Date(post.date).toLocaleDateString()}</span>
                <h1>{post.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="premozone-blog-content">
          <BlockContent blocks={post.content}/>
        </div>
      </Grid>
      <Grid xs={0} sm={0} md={6} lg={4} xl={2} direction="column">
        <Spacer y={2}/>
        <Card>
          <Text b>Latest Articles</Text>
          <div style={{display:'flex',flexDirection: 'column'}}>
            {morePosts.length > 0 && morePosts.map(e => {
              return(
                <Link href={e.slug} key={e.slug}>
                <Text className="premo-zone-link" s>{e.title}</Text>
                </Link>
              )
            })
          }
        </div>
        </Card>
        <Spacer y={2}/>
        <Card>
          <Text b>Quick Navigation</Text>
          <div style={{display:'flex',flexDirection: 'column'}}>
            <Link href="/">
            <Text className="premo-zone-link" s>Home</Text>
            </Link>
          </div>
        </Card>
        <Spacer y={2}/>
        <Card>
          <Text b>Tags</Text>
          <div style={{display:'flex',flexDirection: 'column'}}>
            {post.tags !== null && post.tags.map((e) => (
                <Text className="premo-zone-link" s>{e}</Text>
              ))}
          </div>
        </Card>
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
