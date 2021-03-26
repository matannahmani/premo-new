import { Row, Text, Col,Button, Grid, Spacer } from '@geist-ui/react'
import Head from 'next/head'
import { useContext } from 'react'
import { AppContext } from '../context/appcontext';
import { ChevronsDown } from '@geist-ui/react-icons'
import Partners from '../components/partners';
import ProductCard from '../components/productCard';
import HeroCarousel from '../components/HeroCarousel';
import AppVideo from '../components/AppVideo';
import Line from '../components/Line';

export default function Home() {
  const [app,] = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>Premo - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container className="main-hero">
        {!app.mobile &&
        <Grid xs={0} md={14} lg={14}>
          <HeroCarousel/>
        </Grid>
        }
        <Grid xs={24} md={10} lg={10} justify="center" alignItems={app.mobile ? 'center' : "flex-start"} className="main-center">
          <Text b className={"hero-title"} h1>Perfect preparation to become Super Host</Text>
          <Text className={"hero-description"} p>Premo is an integrated package of smart home devices and a accommodation management platform.</Text>
          <Button className="learnbtn btn-md hero-btn" auto size="large">Learn More</Button>
          {app.mobile &&
          <ChevronsDown className="hero-hover"/>
          }
        </Grid>
      </Grid.Container>
      <Grid.Container alignItems="center" justify="center" className="section-partners">
        <Grid className="partners-box">
          <Text h4>Our Trusted Partners.</Text>
          <Partners/>
        </Grid>
      </Grid.Container>
      <Grid.Container alignItems="center" justify="center" className="product-section">
        {/* {app.mobile ?} */}
      <div className="product-one-shape-1"></div>
      <div className="product-one-shape-2"></div>
      <div className="product-one-shape-3"></div>
      <div className="product-one-shape-4"></div>

        <Grid style={{zIndex: 2}} direction="column" xs={24} md={12} lg={12}>
          <Text className={`product-header text-left`} h2>The easiest way to become a Super Host</Text>
          <Text className={`product-description text-left`} h3>Premo is a smart accommodation management platform that supports convenient management
          of rental accommodation such as Airbnb. Interested in hosting your home?
          You can easily manage your accommodation with a monthly subscription.</Text>
          <Grid direction="row" className="product-cardbox" xs={24}>
          <ProductCard title="Standard" description="24,900 won per month / 1 year" icon="./king-i.svg"/>
          <ProductCard title="Premium" description="44,900 won per month / 2 years" icon="./diamond-i.svg"/>
        </Grid>
        </Grid>
      </Grid.Container>
      <Grid.Container className="app-video-section" >
        <Grid alignItems="center" direction={app.mobile ? "column" : 'row'} justify="center" xs={24} md={24} lg={24}>
          <div className="app-video-sectionbox">
          <AppVideo title="You don't have to tell the guest the password or pass the key directly." img={'app/0.png'} icon="icons/key.svg" />
          {!app.mobile && <Line className="app-video-line" /> }
          <AppVideo title="Five-star hotel level cleaning services and supply management on a one-click basis." img={'app/1.png'} icon="icons/stars.svg" flip={true} />
          {!app.mobile && <Line className="app-video-line line-2" /> }
          </div>
        </Grid>
          {/* <Spacer y="1.5"/> */}
        <Grid alignItems="center" direction="column" justify="center" xs={24} md={24} lg={24}>
          <AppVideo style={{margin:'unset'}} title="Use real-time monitoring to reduce costs wasted on management." icon="icons/cash.svg" hide={true} />
          {/* <Text h3>Get The Premo App</Text> */}
          <Spacer/>
          <Button shadow size="large" type="secondary">Play Store</Button>
          <Spacer/>
          <Button shadow size="large" type="secondary">App Store</Button>
          <Spacer/>
        </Grid>
      </Grid.Container>
      </div>
  )
}
