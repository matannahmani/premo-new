import { Card, Grid, Image, Pagination, Spacer, Text } from '@geist-ui/react';
import { ChevronLeft, ChevronRight } from '@geist-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';
import { getAllPostsForHome } from '../lib/api'

const PremoZone = ({ allPosts, preview }) => {
  const [page,setPage] = useState(1);
  const pagaitions = () => {
    if (page === 1) 
      return allPosts.slice(0,4);
    else
      return allPosts.slice((page - 1) * 5 -1 ,page * 5 - 1)
  }
    return(
      <>
      <Grid.Container direction="column" align="center">
        <Spacer y={2}/>
        <Text h4>Premo Zone</Text>
        <Grid style={{padding: '40px',flexWrap: 'wrap'}} xs justify="center" alignItems="center">
          <Spacer y={2}/>
          {pagaitions().map((e) => {
            return(
              <Link key={e.slug} href={`blog/${e.slug}`}>
                <Card className="premozone-card" shadow type="lite">
                  <Image src={e.coverImage} width={240} height={240}/>
                  <div className="premozone-card-body premo-text">
                  <span>{new Date(e.date).toLocaleDateString()}</span>
                  <h3>{e.title}</h3>
                  </div>
                  <span className="premozone-card-readmore">Read More</span>
                </Card>
              </Link>
          )
          })}
        </Grid>
        <Grid>
        <Pagination onChange={(e) => setPage(e)} count={allPosts.length > 4 ? Math.round(allPosts.length / 5.0 + 1) : 1}>
        <Pagination.Next><ChevronRight /></Pagination.Next>
        <Pagination.Previous><ChevronLeft /></Pagination.Previous>
        </Pagination>
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
  