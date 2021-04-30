import { Grid, Spacer, Text } from "@geist-ui/react";
import Tabs from '../components/Tabs';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Pricing = () => {
    const { t } = useTranslation('price')

    return (
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
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['price']),
    },
  })
export default Pricing;