import { Text, Button, Grid, Spacer, Card, Image } from '@geist-ui/react'
import Link from 'next/link';
import { useContext, useRef } from 'react'
import { AppContext } from '../context/appcontext';
import { ChevronsDown } from '@geist-ui/react-icons'
import Partners from '../components/partners';
import ProductCard from '../components/productCard';
import HeroCarousel from '../components/HeroCarousel';
import AppVideo from '../components/AppVideo';
import Line from '../components/Line';
import Appstore from '../public/icons/appstore.svg'
import Playstore from '../public/icons/googleplay.svg'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Faq from '../components/Faq';
import { getAllFaqsForHome } from '../lib/api';
// import Counter from '../components/Counter';

export default function Home({allFaqs}) {
  const [app,] = useContext(AppContext);
  const midSec = useRef(null);
  const scrollTo = () => midSec.current.scrollIntoView({ behavior: 'smooth', block: 'start'})    
  const { t } =  useTranslation(['home', 'price']);
  const router = useRouter();
  return (
    <>
    <Head>
    <title>{router.locale === 'en' ? "Premo | Home" : "프리모 | Home" }</title>
    <meta name="description" content="슈퍼호스트가 되기 위한 완벽한 준비. 프리모는 에어비앤비 등 임대숙소를 편리하게 운영할 수 있도록 지원하는 스마트 숙소관리 플랫폼입니다. 더 많은 숙소를 운영하고 더 많은 수익을 가져가세요."/>
    </Head>
    <div>
      <Grid.Container className="main-hero">
        {!app.mobile &&
        <Grid xs={0} md={14} lg={14}>
          <HeroCarousel/>
        </Grid>
        }
        <Grid xs={24} md={10} lg={10} justify="center" alignItems={app.mobile ? 'center' : "flex-start"} className="main-center">
          <Text className={"hero-title"} h1>{t('indextitle')}</Text>
          <Text className={"hero-description"} p>{t('indexsubtitle')}</Text>
          <Button onClick={scrollTo} className="learnbtn btn-md hero-btn" auto size="large">{t('price:learnmore')}</Button>
          <ChevronsDown onClick={scrollTo} className={`hero-hover ${app.mobile ? '' : 'mobile-arrow'}`}/>
        </Grid>
      </Grid.Container>
      <Grid.Container alignItems="center" justify="center" direction="column" className="section-partners">
        <Grid className="partners-box">
          <Text h4>{t('partners')}</Text>
          <Partners/>
        </Grid>
        <Grid xs className="appdownload" alignItems="center" justify="center" direction="column">
          <h2>{t('allincontrol')}</h2>
          <div className="premo-app">
          <img className="premo-app-bg" src="/app/a0.png"/>
          <img className="premo-app-ab" src="/app/a1.png"/>
          <img className="premo-app-ap" src="/app/a2.png"/>
          <img className="premo-app-lk" src="/app/a3.png"/>
          </div>
          <Grid xs style={{width: '100%'}} justify="space-evenly">
            <button className="store-btn" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.keywe.premo')} ><Playstore viewBox="0 0 180 52" style={{width:'100%'}} width={null} height={null}/></button>
            <button className="store-btn" onClick={() => window.open('https://apps.apple.com/app/id1538085877')} ><Appstore viewBox="0 0 180 52" style={{width:'100%'}} width={null} height={null}/></button>            
          </Grid>
        </Grid>

      </Grid.Container>
      <div ref={midSec}>
      <Grid.Container alignItems="center" justify="center" className="product-section">

        {/* {app.mobile ?} */}
      <div className="product-one-shape-1"></div>
      <div className="product-one-shape-2"></div>
      <div className="product-one-shape-3"></div>
      <div className="product-one-shape-4"></div>

        <Grid style={{zIndex: 2}} direction="column" xs={24} md={12} lg={12}>
          <Text className={`product-header text-left`} h2>{t('packagestitle')}</Text>
          <Text className={`product-description text-left`} h3>{t('packagessub')}</Text>
          <Grid direction="row" className="product-cardbox" xs={24}>
          <ProductCard title={t('price:tab-btn-s')} buy={t('price:buy')}  description={t('price:tab-btn-s-price1')} icon="./king-i.svg"/>
          <ProductCard title={t('price:tab-btn-p')} buy={t('price:buy')} description={t('price:tab-btn-p-price1')} icon="./diamond-i.svg"/>
        </Grid>
        </Grid>
      </Grid.Container>
      </div>
      <Grid.Container className="app-video-section" >
        <Grid alignItems="center" direction={app.mobile ? "column" : 'row'} justify="center" xs={24} md={24} lg={24}>
          <div className="app-video-sectionbox">
          <AppVideo title={t('video1')} video="https://www.youtube.com/embed/rb9qYGzsoZY" img={'app/0.png'} icon="icons/key.svg" />
          {!app.mobile && <Line className="app-video-line" /> }
          <AppVideo title={t('video2')} video="https://www.youtube.com/embed/qGradHWnGQA" img={'app/1.png'} icon="icons/stars.svg" flip={true} />
          {!app.mobile && <Line className="app-video-line line-2" /> }
          </div>
        </Grid>
          {/* <Spacer y="1.5"/> */}
        <Grid alignItems="center" direction="column" justify="center" xs={24} md={24} lg={24}>
          <AppVideo style={{margin:'unset'}} title={t('video3')} icon="icons/cash.svg" hide={true} />
          <Spacer y={3}/>
          <Card shadow hoverable className="index-cta">
            <div style={{position: 'relative',display: 'flex',flexDirection: 'column'}}>
            <Image className="index-cta-background" src="./app/3.png" height={200} width={295} scale="100%" style={{objectFit: 'cover'}}/>
            <Image className="index-cta-background-p" src="./app/2.png"/>
            </div>
            <div style={{position: 'relative'}}>
            <Image height={24} width={24} className="security" src="./icons/security.png"/>
            <Text className="index-cta-background-description" p>{t('cta')}</Text>
            <Link href="/price">
              <Button className="learnbtn btn-md">{t('price:buy')}</Button>
            </Link>
            </div>
          </Card>
          <Spacer y={4}/>
        </Grid>
        <Grid style={{background: '#3D5582',padding: '64px 0px'}} alignItems="center" direction="column" justify="center" xs={24} md={24} lg={24}>
        {/* <Text className={`product-header text-left`} style={{color: 'white'}} h2>{t('statstitle')}</Text>
        <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center'}}>
        <Counter is24 title={t('common:counter1')}/>
        <Counter is24 title={t('common:counter2')}/>
        <Counter is24 title={t('common:counter3')}/>
        <Counter is24 title={t('common:counter4')}/>
        </div> */}
        <Text className={`product-header text-left`} style={{color: 'white'}} h2>FAQ</Text>
        <Spacer/>
        <div className="faq-container">
        {allFaqs.map((e,key) =>
          e.mainpage &&
          <Faq key={key} q={router.locale === 'en' ? e.question.en : e.question.kr} a={router.locale === 'en' ? e.answer.en : e.answer.kr}/>
        )}
          </div>
          <Spacer y={2}/>
        </Grid>
      </Grid.Container>
      </div>
      </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const allFaqs = await getAllFaqsForHome()
  return {
    props: {
      allFaqs,
      ...await serverSideTranslations(locale, ['price','home'])
    },
    revalidate: 10, // In seconds
  }
}