import { Button, Grid, Pagination, Spacer, Table, useToasts } from "@geist-ui/react";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppContext, UserContext } from "../../context/appcontext";
import { getUserPurchase } from "../../lib/userapi";
import Spinner from "../../components/Spinner";
import { ChevronLeft, ChevronRight } from '@geist-ui/react-icons';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Payment = () => {
    const router = useRouter();
    const [page,setPage] = useState(1);
    const [,setToast] = useToasts();
    const [app,] = useContext(AppContext);
    const [user,] = useContext(UserContext);
    const [data,setData] = useState([]);
    const { t } =  useTranslation(['common']);

    const pagaitions = () => {
        if (page === 1) 
          return data.slice(0,10);
        else
          return data.slice((page - 1) * 10,page * 10)
      }

    // DELIVERY TOAST WITH ACTION
    const action = (url) => ({
        name: t('common:shipping'),
        handler: () => window.open(url)
    })
    const click = ({url,tracking}) => setToast({
        text: `Tracking number: ${tracking}`,
        actions: [action(url)]
    })

    // DELIVERY TOAST WITH ACTION END
    
    const operation = (actions, rowData) => {
        const tracking = rowData.rowValue.trackingNo;
        const url = rowData.rowValue.trackingUrl;
        return <Button className="learnbtn" onClick={() => tracking !== null && click({url,tracking}) }
        style={{minWidth: '180px'}}>{tracking === null ? t('common:beforeDelivery') : t('common:shipping')}</Button>
    }
    const monthDiff = (d1, d2) => {
        let months;
        if (d1.getYear() >= d2.getYear()){
            let year = d1.getYear() === d2.getYear() ? 0 : (d1.getYear() - d2.getYear()) * 12 - 1
            months =  d1.getMonth() - d2.getMonth() + year
            return months === 1 ? t('common:lmonth') : `${months} ${t('common:monthleft')}`;
        }
        else{
            return t('common:subend')
        }
    }
    useEffect( async () => {
        if (user.logged === true && !app.signUp && user.triedLog){
            const result = await getUserPurchase({uid: user.pinfo.id,jwt: user.jwt});
            const newdata = [];
            const symbol = {"EUR":"€", "USD":"$", "KRW": "₩"};
            result.data.payload.map( (e,index) => {
                let sub = null
                let monthsLeft = null;
                const orderDate = new Date(e.orderTime);
                if (e.subscriptionInfo !== null){
                    const subDate  = new Date()
                    subDate.setMonth(orderDate.getMonth() + e.subscriptionInfo.periodInMonth);
                    monthsLeft = monthDiff(new Date(subDate),orderDate);
                    sub = {peroid: monthsLeft,total: e.subscriptionInfo.priceTotal + symbol[e.currency]}
                }
                    const prodname = e.prodName !== null ? e.prodName : ''
                    newdata.push({
                    ...e,prodName: prodname,qty: e.qty,price: `${e.unitPrice} ${symbol[e.currency]}`,
                    total: `${e.price} ${symbol[e.currency]}`,orderTime: orderDate.toLocaleDateString(),
                    operation,...sub // if has subscription over rides total price and delivery status
                })
            })
            setData(newdata);
        }
    },[user.logged])

    useEffect(() => {
        if (app.signUp)
            router.replace('/login')
    }, [app.signUp])

    return (
        <Grid.Container direction="column" style={{background: 'rgb(236, 243, 246)',minHeight: '600px',height: '100%'}} justify="center" alignItems="center">
            <Grid alignItems="center" direction="column" justify={user.logged ? 'space-between' : 'center'} xs={24} sm={24} md={22} lg={22} xl={14}>
            {!user.logged || app.signUp ?
             <Spinner/>
            :
            <>
            <div className="payment-container">
            <h1 className="price-section-title">{t('common:subscriptionInfo')}</h1>
            <Spacer y={2}/>
            <Table data={pagaitions}>
                <Table.Column prop="prodName" label={t('common:subscriptionInfo')} />
                <Table.Column prop="qty" label={t('common:ea')} />
                <Table.Column prop="orderTime" label={t('common:paymentDay')} />
                <Table.Column prop="peroid" label={t('common:subscriptionPeriod')} />
                <Table.Column prop="price" label={t('common:price')} />
                <Table.Column prop="total" label={t('common:total')} />
                <Table.Column prop="operation" label={t('common:shipped')} />
            </Table>
            <Spacer y={2}/>
            </div>
            <Pagination onChange={(e) => setPage(e)} count={data.length > 10 ? Math.round(data.length / 10.0) : 1}>
                <Pagination.Next><ChevronRight /></Pagination.Next>
            <Pagination.Previous><ChevronLeft /></Pagination.Previous>
            </Pagination>
            <Spacer y={2}/>
            </>
            }
            </Grid>
        </Grid.Container>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
export default Payment;