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
import { IoBrowsers } from 'react-icons/io5';

export default function Home() {
  const [app,] = useContext(AppContext);
  const midSec = useRef(null);
  const scrollTo = () => midSec.current.scrollIntoView({ behavior: 'smooth', block: 'start'})    

  return (
    <div>
      <Head>
        <title>프리모 - 홈</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container className="main-hero">
        {!app.mobile &&
        <Grid xs={0} md={14} lg={14}>
          <HeroCarousel/>
        </Grid>
        }
        <Grid xs={24} md={10} lg={10} justify="center" alignItems={app.mobile ? 'center' : "flex-start"} className="main-center">
          <Text className={"hero-title"} h1>슈퍼 호스트가 되기 위한 완벽한 준비</Text>
          <Text className={"hero-description"} p>스마트홈 디바이스와 숙소 관리플랫폼 통합 패키지.</Text>
          <Button onClick={scrollTo} className="learnbtn btn-md hero-btn" auto size="large">더 알아보기</Button>
          {app.mobile &&
          <ChevronsDown onClick={scrollTo} className="hero-hover"/>
          }
        </Grid>
      </Grid.Container>
      <Grid.Container alignItems="center" justify="center" className="section-partners">
        <Grid className="partners-box">
          <Text h4>프리모 파트너사</Text>
          <Partners/>
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
          <Text className={`product-header text-left`} h2>호스트가 되는 가장 쉬운 방법</Text>
          <Text className={`product-description text-left`} h3>프리모는 에어비엔비 등 임대 숙소를 편리하게 운영할 수 있도록
          지원하는 스마트 숙박 관리 플랫폼입니다.
          숙소 호스팅에 관심 있으신가요?
          월 구독만으로 간편하게 숙소를 운영할 수 있습니다.</Text>
          <Grid direction="row" className="product-cardbox" xs={24}>
          <ProductCard title="Standard" description="24,900 won per month / 1 year" icon="./king-i.svg"/>
          <ProductCard title="Premium" description="44,900 won per month / 2 years" icon="./diamond-i.svg"/>
        </Grid>
        </Grid>
      </Grid.Container>
      </div>
      <Grid.Container className="app-video-section" >
        <Grid alignItems="center" direction={app.mobile ? "column" : 'row'} justify="center" xs={24} md={24} lg={24}>
          <div className="app-video-sectionbox">
          <AppVideo title="게스트에게 비밀번호를 알려주거나 키를 직접 전달할 필요가 없어요." img={'app/0.png'} icon="icons/key.svg" />
          {!app.mobile && <Line className="app-video-line" /> }
          <AppVideo title="5성급 호텔 수준의 청소 서비스와 비품 관리를 원클릭으로 만나보세요." img={'app/1.png'} icon="icons/stars.svg" flip={true} />
          {!app.mobile && <Line className="app-video-line line-2" /> }
          </div>
        </Grid>
          {/* <Spacer y="1.5"/> */}
        <Grid alignItems="center" direction="column" justify="center" xs={24} md={24} lg={24}>
          <AppVideo style={{margin:'unset'}} title="실시간 모니터링으로 낭비되는 관리 비용을 절감합니다." icon="icons/cash.svg" hide={true} />
          {/* <Text h3>Get The Premo App</Text> */}
            <Spacer/>
            <Button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.keywe.premo')} className="appstore-btn" icon={<Image src="./icons/playstore-logo.png" width={16} height={16}/>} shadow type="secondary">Play Store</Button>
            <Spacer/>
            <Button onClick={() => window.open('https://apps.apple.com/app/id1538085877')} className="appstore-btn" icon={<Image src="./icons/apple-logo.png" width={16} height={16}/>} shadow type="secondary">App Store</Button>
            <Spacer y={3}/>
          <Card shadow hoverable className="index-cta">
            <Image className="index-cta-background" src="./app/3.png" height={155} width={295} scale="100%" style={{objectFit: 'cover'}}/>
            <Image className="index-cta-background-p" src="./app/2.png"/>
            <Text className="index-cta-background-description" p>
            앱에서 호스트 인증 핫플레이스를 등록하거나 안심하고 외출할 수 있도록 보안모드를 설정하세요. 다채로운 스마트홈 환경은 높은 게스트 만족도로 이어집니다.
            </Text>
            <Link href="/price">
              <Button className="learnbtn btn-md">구매하기</Button>
            </Link>
          </Card>
          <Spacer y={3}/>
        </Grid>
      </Grid.Container>
      </div>
  )
}
