import { Grid, Pagination, Spacer, Text } from '@geist-ui/react';
import { ChevronLeft, ChevronRight } from '@geist-ui/react-icons';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Faq from '../components/Faq';
import TabsAni from '../components/TabsAni';
import { getAllFaqsForHome } from '../lib/api';

const FaqPage = ({allFaqs,locale}) => {
    const { t } =  useTranslation(['home', 'price']);
    const [page,setPage] = useState(1);
    const [tab,setTab] = useState(0);
    const router = useRouter();
    const posts = () => (allFaqs.filter(e => {
    if (tab === 0) 
        return e.category === 'general'
    else if (tab === 1)
        return e.category === 'order'
    else if (tab === 2)
        return e.category === 'doorlock'
    else if (tab === 3)
        return e.category === 'premoapp'
    }))
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
      const div = document.getElementById('faq');
      if (div !== null){
        div.scrollIntoView({block: "start"});
      }
    }
    return (
        <>
    <Head>
    <title>{router.locale === 'en' ? "Premo | Faq" : "프리모 | Faq" }</title>
    <meta name="description" content="프리모가 궁금해요. 하드웨어 패키지, 어플리케이션, 구독, 주문배송, 회원가입, 설치 등에 대한 다양한 궁금증을 해결해드립니다."/>
    </Head>
    <div id='faq' style={{position: 'absolute',top: '-24px',width: '0px',height: '0px'}}></div>
      <Grid.Container style={{background: "#ECF3F6",minHeight: '100%'}} direction="column" align="center">
        <Grid xs direction="column" alignItems="center">
            <Spacer y={3}/>
            <Text className="price-section-title" h1>FAQ</Text>
            <div style={{display: 'flex',flexDirection: 'column',height: '100%',width: '100%',justifyContent: 'space-evenly',flex: '1 1 auto'}}>
                <TabsAni changeHandler={changeHandler}>
                <TabsAni.Item header={t('common:faqgeneral')}>
                <div className="faq-container">
                    {pagaitions().map((e,index) => (
                        e !== null &&
                        <Faq key={`a${index}`} q={router.locale === "en" ? e.question.en : e.question.kr} a={router.locale === "en" ? e.answer.en : e.answer.kr}/>
                    ))}
                </div>
                </TabsAni.Item>
                <TabsAni.Item header={t('common:faqorder')}>
                <div className="faq-container">
                    {pagaitions().map((e,index) => (
                        e !== null &&
                        <Faq key={`b${index}`} q={router.locale === "en" ? e.question.en : e.question.kr} a={router.locale === "en" ? e.answer.en : e.answer.kr}/>
                    ))}
                </div>
                </TabsAni.Item>
                <TabsAni.Item header={t('common:faqdoor')}>
                <div className="faq-container">
                    {pagaitions().map((e,index) => (
                        e !== null &&
                        <Faq key={`c${index}`} q={router.locale === "en" ? e.question.en : e.question.kr} a={router.locale === "en" ? e.answer.en : e.answer.kr}/>
                    ))}
                </div>
                </TabsAni.Item>
                <TabsAni.Item header={t('common:faqapp')}>
                <div className="faq-container">
                    {pagaitions().map((e,index) => (
                        e !== null &&
                        <Faq key={`d${index}`} q={router.locale === "en" ? e.question.en : e.question.kr} a={router.locale === "en" ? e.answer.en : e.answer.kr}/>
                    ))}
                </div>
                </TabsAni.Item>
                </TabsAni>
                <Pagination onChange={(e) => {setPage(e); scrollTo()}} count={posts().length > 4 ? Math.round(posts().length / 4.0) + 1 : 1}>
                <Pagination.Next><ChevronRight /></Pagination.Next>
                <Pagination.Previous><ChevronLeft /></Pagination.Previous>
                </Pagination>
            </div>
        </Grid>
        </Grid.Container>
        </>
    )
}

export default FaqPage;

export const getStaticProps = async ({locale}) => {
    const allFaqs = await getAllFaqsForHome()
    return {
      props: {
        allFaqs,
        ...await serverSideTranslations(locale, ['price','home'])
      },
      revalidate: 10, // In seconds
    }
  }