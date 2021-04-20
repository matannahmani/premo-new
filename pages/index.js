import { Text, Button, Grid, Spacer, Card, Image, Link } from '@geist-ui/react'
import Head from 'next/head'
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
import { useRouter } from 'next/router';

export default function Home() {
  const [app,] = useContext(AppContext);
  const midSec = useRef(null);
  const scrollTo = () => midSec.current.scrollIntoView({ behavior: 'smooth', block: 'start'})    
  const { t } =  useTranslation(['home', 'price']);
  const router = useRouter();
  return (
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
          {app.mobile &&
          <ChevronsDown onClick={scrollTo} className="hero-hover"/>
          }
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
            <button className="store-btn" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.keywe.premo')} ><Playstore viewBox="0 0 180 52"  width={null} height={null}/></button>
            <button className="store-btn" onClick={() => window.open('https://apps.apple.com/app/id1538085877')} ><Appstore viewBox="0 0 180 52"  width={null} height={null}/></button>            
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
          <ProductCard title="Standard" description={t('price:tab-btn-s-price1')} icon="./king-i.svg"/>
          <ProductCard title="Premium" description={t('price:tab-btn-p-price1')} icon="./diamond-i.svg"/>
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
            <div style={{position: 'relative'}}>
            <Image className="index-cta-background" src="./app/3.png" height={155} width={295} scale="100%" style={{objectFit: 'cover'}}/>
            <Image className="index-cta-background-p" src="./app/2.png"/>
            </div>
            <Text className="index-cta-background-description" p>{t('cta')}</Text>
            <Link href="/price">
              <Button className="learnbtn btn-md">{t('buy')}</Button>
            </Link>
          </Card>
          <Spacer y={3}/>
        </Grid>
      </Grid.Container>
      </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['price','home']),
  },
})