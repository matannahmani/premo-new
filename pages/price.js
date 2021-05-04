import { Grid, Spacer, Text } from "@geist-ui/react";
import Tabs from '../components/Tabs';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/head";
import { useRouter } from "next/router";

const Pricing = () => {
    const { t } = useTranslation('price')
    const router = useRouter();
    return (
        <>
        <Head>
        <title>{router.locale === 'en' ? "Premo | Prices" : "프리모 | Prices" }</title>
        <meta name="description" content="월 구독만으로 간편하게 숙소를 운영할 수 있습니다. 남는 시간과 비용으로 추가 수익의 기회를 만들어보세요. 호스트의 시간과 비용을 절약해주고 게스트에게는 높은 만족을 줍니다."/>
        </Head>
        <Grid.Container className="price-section">
            <div className="product-one-shape-5"></div>
            <div className="product-one-shape-5 top left"></div>
            <div className="product-one-shape-5 bottom left"></div>
            <div className="product-one-shape-5 bottom right"></div>
            <Grid xs style={{minHeight: '940px'}} alignItems="center" direction="column">
            <Spacer y={3}/>
                <Text className="price-section-title" h1>{t('title')}</Text>
            <div>
                <Tabs t={t}/>
            </div>
            </Grid>
        </Grid.Container>
        </>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['price']),
    },
  })
export default Pricing;