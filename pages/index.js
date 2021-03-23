import { Row, Image, Text, Col,Button, Grid } from '@geist-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premo - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container className="main-hero">
        {/* <div className="overlay"> */}
        {/* </div> */}

        <Grid gap={2} className="main-center">
          <Text style={{fontSize: '32px',zIndex: 3,padding: '15px 0px'}} h1>Perfect preparation to become Super Host</Text>
            <Text style={{fontSize: '18px',textAlign: 'left',zIndex: 3,padding: '0px 18px'}} p>Premo is an integrated package of smart home devices and a accommodation management platform.</Text>
            <Button className="learnbtn" auto size="large">Learn More</Button>
        </Grid>
      </Grid.Container>
      {/* <Row className="main-hero">
        <Col span={12}>

        </Col>
        <Col span={12}>
          <Image src="/test.png" height={750}/>
        </Col>
      </Row> */}
      </div>
  )
}
