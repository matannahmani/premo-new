import { Row, Text, Col,Image,Button, Grid } from '@geist-ui/react'
import Head from 'next/head'
import { useContext } from 'react'
import { AppContext } from '../context/appcontext';
import { ChevronsDown } from '@geist-ui/react-icons'
import Partners from '../components/partners';
import ProductCard from '../components/productCard';

export default function Home() {
  const [app,] = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>Premo - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container className="main-hero">
        <Grid xs={0} md={14} lg={14}>
          <Image src="/home-bg.png" className="w-100" style={{objectFit: 'cover'}}/>
        </Grid>
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
          <Partners/>
        </Grid>
      </Grid.Container>
      <Grid.Container alignItems="center" justify="center" className="product-section">
        <Grid direction="column" xs={24} md={12} lg={12}>
          <Text className={`product-header text-left`} h2>The easiest way to become a Super Host</Text>
          <Text className={`product-description text-left`} h3>Premo is a smart accommodation management platform that supports convenient management
          of rental accommodation such as Airbnb. Interested in hosting your home?
          You can easily manage your accommodation with a monthly subscription.</Text>
          <Grid className="product-cardbox" xs={24}>
          <ProductCard title="Standard" description="24,900 won per month / 1 year" icon="./king-i.svg"/>

        </Grid>
        </Grid>

      </Grid.Container>
      </div>
  )
}
