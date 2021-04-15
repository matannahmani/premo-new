import { Card, Grid, Image, Spacer, Text } from '@geist-ui/react';
import Link from 'next/link';
import { getAllPostsForHome } from '../lib/api'

const PremoZone = ({ allPosts, preview }) => {
    return(
      <>
      <Grid.Container>
        <Grid style={{padding: '40px'}} xs direction="column" alignItems="center">
          <Text h4>Premo Zone</Text>
          <Spacer y={2}/>
          {allPosts.map((e) => {
            return(
              <Link href={`blog/${e.slug}`}>
                <Card className="premozone-card" shadow type="lite">
                  <Image src={e.coverImage} width={240} height={240}/>
                  <h3>{e.title}</h3>
                  <span>{new Date(e.date).toLocaleDateString()}</span>
                </Card>
              </Link>
          )
          })}
        </Grid>
      </Grid.Container>
      </>
    )
}

export default PremoZone;

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview)
    return {
      props: { allPosts, preview },
      revalidate: 10, // In seconds
    }
  }
  