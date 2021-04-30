import { Button, Card, Grid, Input, Note, Spacer, useToasts } from "@geist-ui/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { resetPassword } from "../lib/userapi";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserContext } from "../context/appcontext";
import Spinner from "../components/Spinner";

const ForgotPassword = () => {

    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(true)
    const [user,] = useContext(UserContext);
    const [,setToast] = useToasts();
    const router = useRouter();
    const { t } =  useTranslation(['common']);

    const validateEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.length > 4 && re.test(String(email).toLowerCase())) // email and bigger then 4
            return false
        else
            return true
    }
    const resetHandler = async () => {
        setLoading(true);
        const result = await resetPassword({email});
        if (result.data.result.code === 0){
            setToast({type: 'success', text: t('common:resetsent')})
            router.replace('/login')
        }else{
            setToast({type: 'error', text: `${t('common:email')} ${t('common:404')}`})
        }
        setLoading(false);
    }
    useEffect(() => {
        if (!user.triedLog) return;
        if (user.triedLog && user.pinfo === undefined){
            setLoading(false);
        }else{
            router.push('/')
        }
    }, [user.triedLog])
    return (
        <PageLayout>
        {!loading.triedLog && loading ?
        <Grid style={{display: 'flex',height: '100%'}} alignItems="center" justify="center" direction="column">
            <Spinner/>
        </Grid>
        :
        <>
            <h1 className="price-section-title">{t('common:resetpassword')}</h1>
            <Spacer y={2}/>
            <Card shadow style={{borderRadius: '16px'}}>
            <Grid style={{display: 'flex'}} alignItems="center" justify="center" direction="column">
                <Note type="secondary">{t('resetpasswordnote')}</Note>
                <Spacer/>
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="alanturing@gmail.com" width="240px">
                    {t('common:email')}
                </Input>
                <Spacer/>
                <Button disabled={validateEmail()} onClick={resetHandler} className="learnbtn" loading={loading} auto>{t('common:resetpassword')}</Button>
            </Grid>
            </Card>
        </>
        }
        </PageLayout>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
export default ForgotPassword;