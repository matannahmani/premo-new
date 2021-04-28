import { Button, Card, Grid, Input, Note, Slider, Spacer, useToasts } from "@geist-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import PageLayout from "../../components/PageLayout"
import { UserContext } from "../../context/appcontext"
import { changePassword } from "../../lib/userapi"
import {firebase} from '../../lib/firebase'
import { useRouter } from "next/router"
import WithdrawlRead from "../../components/WithdrawlRead"
import WithdrawlModal from "../../components/WithdrawlModal"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ChangePassword = ({password,setPassword,t}) => {
    return (
        <>
        <Spacer y={2}/>
        <Input.Password onChange={(e) => setPassword({...password,upassword: e.target.value})} width="240px">
        {t('common:password')}
        </Input.Password>
        <Spacer/>
        <Input.Password onChange={(e) => setPassword({...password,confirmpassword: e.target.value})} width="240px">
        {t('common:confirmpassword')}
        </Input.Password>
        <Spacer y={2}/>
        </>
    )
}

const AccountQuit = ({step}) => {
    return (
        <>
        <Spacer y={2}/>
        <div>
        <Slider step={1} value={step} max={2} showMarkers />
        <Spacer/>
        <WithdrawlRead step={step}/>
        </div>
        <Spacer y={2}/>
        </>
    )
}


const Profile = () => {
    const [user,] = useContext(UserContext);
    const [pagename,setPageName] = useState('');
    const [loading,setLoading] = useState(false);
    const [password,setPassword] = useState({upassword: '',confirmpassword: ''})
    const [,setToast] = useToasts();
    const [step,setStep] = useState(0);
    const [modal,setModal] = useState(false);
    const router = useRouter();
    const { t } =  useTranslation(['home', 'price']);

    const passwordHandler = async () => {
        setLoading(true);
        const result = await changePassword({jwt: user.jwt,id: user.pinfo.id,password: password.upassword})
        if (result.data.result.code === 0){
            setToast({type: 'success', text: 'Password changed\nPlease login again!'})
            firebase.auth().signOut();
        }else{
            setToast({type: 'error', text: 'ERROR Try Later'})
        }
        setLoading(false);
    }

    const stepHandler = () => {
        if (step < 1)
            setStep(step + 1)
        else
            setModal(true);
    }

    useEffect(() => {
        if (step === 2){
            setToast({text: 'DISABLED FOR NOW',type: 'error'})
            router.replace('/')
        }
    },[step])

    const navBtn = () => {
        return(
            <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                {pagename === 'Withdrawl' &&
                    <Button loading={step === 2} onClick={stepHandler} style={{width: '140px',margin: '8px'}} type="error">Accept</Button>
                }
                <Button disabled={pagename === t('common:resetpassword') && password.upassword.length < 4 || password.upassword !== password.confirmpassword} 
                onClick={() => {pagename !== t('common:resetpassword') ? setPageName(t('common:resetpassword')) : passwordHandler()}} style={{width: '140px',margin: '8px'}}
                type="secondary">{t('common:changepassword')}</Button>
                {/* {pagename !== 'Withdrawl' &&
                <Button onClick={() => setPageName('Withdrawl')} style={{width: '140px',margin: '8px'}} type="error">Withdrawal</Button>
                } */}
                {pagename !== '' &&
                <Button onClick={() => setPageName('')} style={{width: '140px',margin: '8px'}} type="abort">{t('common:back')}</Button>
                }
            </div>
        )
    }
    return (
        <PageLayout>
            <h1 className="price-section-title">{t('common:accountcontrol')}</h1>
            <Spacer y={2}/>
            <Card shadow style={{borderRadius: '16px'}}>
            <Grid style={{display: 'flex'}} alignItems="center" justify="center" direction="column">
            <AnimatePresence exitBeforeEnter>
            {pagename === t('common:resetpassword') &&
            <motion.div key={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <Note type="warning">{t('common:account')} {pagename}.</Note>
                {ChangePassword({password,setPassword,t})}
                {navBtn()}
                </motion.div>
            }
            {pagename === 'Withdrawl' &&
            <motion.div key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                <Note type="warning">{t('common:account')} {pagename}.</Note>
                <AccountQuit step={step}/>
                {navBtn()}
                </motion.div>
            }
            {pagename === '' &&
            <motion.div key={2}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
            >
                <Spacer/>
                <Input disabled value={user.email} width="240px">
                    {t('common:email')}
                </Input>
                <Spacer/>
                <Input disabled value={user.name} width="240px">
                    {t('common:name')}
                </Input>
                <Spacer y={2}/>
                {navBtn()}
            </motion.div>
            }
            </AnimatePresence>
            </Grid>
            <Spacer y={2}/>
            </Card>
            <WithdrawlModal modal={modal} setStep={setStep} step={step} setModal={setModal}/>
        </PageLayout>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['price','common']),
    },
  })
export default Profile