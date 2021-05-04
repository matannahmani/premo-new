import { Card, Grid, Image, Pagination, Spacer } from '@geist-ui/react';
import { ChevronLeft, ChevronRight } from '@geist-ui/react-icons';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TabsAni from '../components/TabsAni';
import { getAllPostsForHome } from '../lib/api'

const PremoZone = ({ allPosts, preview }) => {
  const [page,setPage] = useState(1);
  const [tab,setTab] = useState(0);
  const router = useRouter();
  const posts = () => (allPosts.filter(e => {
    if (tab === 1) 
      return e.lookbook
    else
      return !e.lookbook
    }
    ))
  const pagaitions = () => {
    if (page === 1) 
      return posts().slice(0,4);
    else
      return posts().slice((page - 1) * 4 ,page * 4)
  }
  const changeHandler = ((e) => {
    setPage(1);
    setTab(e);
  })

  const scrollTo = () => {
    const div = document.getElementById('premozone');
    if (div !== null){
      div.scrollIntoView({block: "start"});
    }
  }
    return(
      <>
        <Head>
        <title>{router.locale === 'en' ? "Premo | Premo Life" : "프리모 | Premo Life" }</title>
        <meta name="description" content="프리모를 실제 활용하고 있는 호스트와 그 숙소에 대한 이야기를 전해드립니다. 이외에도 프리모 패키지 별 제품이미지와 신제품을 만나볼 수 있습니다."/>
        </Head>
      <div id='premozone' style={{position: 'absolute',top: '-24px',width: '0px',height: '0px'}}></div>
      <Grid.Container  style={{background: "#ECF3F6"}} direction="column" align="center">
        <Grid  xs justify="center" alignItems="center">
          <TabsAni changeHandler={changeHandler}>
            <TabsAni.Item header="Premo Zone">
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
            </TabsAni.Item>
            <TabsAni.Item header="Look Book">
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
            </TabsAni.Item>
          </TabsAni>
        </Grid>
        <Grid style={{padding: '40px',flexWrap: 'wrap'}} xs justify="center" alignItems="center">
          <Spacer y={2}/>

        </Grid>
        <Grid>
        <Pagination onChange={(e) => {setPage(e); scrollTo()}} count={posts().length > 4 ? Math.round(posts().length / 4.0) + 1 : 1}>
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
  