import { Button, Grid, Input, Modal, Note, Slider, Spacer } from "@geist-ui/react"
import { ChevronLeft, ChevronRight, Truck } from "@geist-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react"
import DaumPostcode from 'react-daum-postcode';
import ProductCard from "../components/productCard";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const SubInfo = ({title,sub}) => {
    return (
        <div className="purchase-detail-item">
        <span>{title}</span>
        <span>{sub}</span>
        </div>
    )
}

const AnimDiv = ({akey,children}) => (
    <motion.div
    key={akey}
    style={{width: '100%',maxWidth: '640px', overflow: "hidden",padding: '16px',margin: '40px 0px',borderRadius: '4px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
    initial={{ scale: 0,height: 20 }}
    animate={{ scale: 1,height: "auto" }}
    exit={{ scale: 0,height: 20 }}
    transition={{ duration: 0.5 }}>
    {children}
    </motion.div>
)

const Purchase = () => {
    const [modal,setModal]= useState(false);
    const [step,setStep] = useState(1);
    const [price,setPrice] = useState(0);
    const [user,setUser] = useState({name: '',phone: '',email: '',country: 'South Korea',address: '',zipcode: '',addressdetailed: ''});
    const router = useRouter();
    const { t } =  useTranslation(['home', 'price']);
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setUser({...user,zipcode: data.zonecode,address: fullAddress});  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setModal(false);
      }
    const stepHandler = (move) =>{
        const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (move && step === 2 && user.name.length > 1 && user.phone.match(phone) && user.email.match(email))
            return true
        if (move && step === 3 && user.address.length > 0 && user.addressdetailed.length > 0 && user.zipcode.length > 0)
            return true 
        if (!move && step !== 1) return true;
        if (step === 1&& move) return true;
        return false
    }
    const handleProduct = () =>{
        if (router.query.item === "Standard") // set max height to block card growing in height as animation enters
            return <ProductCard buy={t('price:buy')} style={{margin: '0px auto 32px auto',maxHeight: '144px',maxWidth: '100%'}} onChange={(e) => setPrice(e)} qtyselect={true} price={24900} purchase={true} title="Standard" description={t('price:tab-btn-s-price1')} icon="./king-i.svg"/>
        if (router.query.item === "Premium")
            return <ProductCard buy={t('price:buy')} style={{margin: '0px auto 32px auto',maxHeight: '144px',maxWidth: '100%'}} onChange={(e) => setPrice(e)} qtyselect={true} price={44900} purchase={true} title="Premium" description={t('price:tab-btn-p-price1')} icon="./diamond-i.svg"/>
    }
    const subDate = (year) => {
        const subDate = new Date();
        subDate.setFullYear(subDate.getFullYear() + year);
        return subDate;
    }
    return (
        <Grid.Container style={{padding: '40px'}} alignItems="center" direction="column">
            <Grid style={{minHeight: '540px',position: 'relative',width: '540px'}} direction="column" alignItems="center" xs={24} sm={24} md={16} lg={14} xl={12}>
                <Slider value={step} className="purchase-slider" initialValue={1} min={1} showMarkers={true} disabled max={3}/>
                <Spacer/>
                <AnimatePresence exitBeforeEnter>
                {step === 2 &&
                <AnimDiv key="pstep0" akey="step2">
                <h2 className="purchase-title">{t('common:ordererInfoEnter')} :</h2>
                <Input value={user.name} name="name" autoComplete onChange={(e) => setUser({...user, name: e.target.value})}>{t('common:name')}</Input>
                <Spacer/>
                <Input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="phone" autoComplete value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})}>{t('common:phone')}</Input>
                <Spacer/>
                <Input type="email" name="email" autoComplete value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}>{t('common:email')}</Input>
                <Spacer/>
                <span>{t('common:emailNotifyComment')}</span>
                </AnimDiv>
                }
                {step === 3 &&
                <AnimDiv key="pstep1" akey="step3">
                <h2 className="purchase-title">{t('common:enterShippingInfo')} :</h2>
                <Input disabled value={t('common:southKorea')}>{t('common:countryArea')}</Input>
                <Spacer/>
                <Input onClick={() => setModal(true)} value={user.address} className="daum-input" readOnly>{t('common:address')}</Input>
                <Spacer/>
                <Input value={user.zipcode} disabled>{t('common:zipCode')}</Input>
                <Spacer/>
                <Input value={user.addressdetailed} onChange={(e) => setUser({...user, addressdetailed: e.target.value})}>{t('common:detailedAddress')}</Input>
                </AnimDiv>
                }
                {step === 1 &&
                <AnimDiv key="pstep2" akey="step1">
                <h2 className="purchase-title">{t('common:orderInfo')} :</h2>
                {handleProduct()}
                <div className="shipping-time">
                    <Truck/>
                    <span>{t('common:orderShippingInfo')}</span>
                    <Spacer/>
                </div>
                <Spacer/>
                    <h2 className="purchase-title">{t('common:subscriptionService')} :</h2>
                    <SubInfo title={t('common:subscriptionPeriod')} sub={`${new Date().toLocaleDateString()} ~  ${subDate(router.query.item === "Standard" ? 1 : 2).toLocaleDateString()}`}/>
                    <SubInfo title={t('common:monthlySubscriptionDate')} sub={new Date().getDate()}/>
                    <SubInfo title={t('common:expirationDate')} sub={`${subDate(router.query.item === "Standard" ? 1 : 2).toLocaleDateString()}`}/>
                    <h2 className="purchase-title">{t('common:paymentDetails')}:</h2>
                    <SubInfo title={t('common:orderAmount')} sub={price}/>
                    <SubInfo title={t('common:shipping')} sub={t('common:free')}/>
                    <Spacer/>
                    <Note label={false} type="secondary">{t('common:VAT0')}₩2,263 {t('common:VAT1')}: <b>₩{price + 2263}</b></Note>
                </AnimDiv>
                }
                </AnimatePresence>
                <Spacer/>
                <div className="purchase-nav">
                    <ChevronLeft className={!stepHandler(false) ? 'disabled' : ''} onClick={() => stepHandler(false) && setStep(step -1)}/>
                    <ChevronRight className={!stepHandler(true) ? 'disabled' : ''} onClick={() => stepHandler(true) && setStep(step +1)}/>
                </div>
            </Grid>
            <Modal open={modal} onClose={() => setModal(false)}>
                <DaumPostcode onComplete={handleComplete}/>
                <Modal.Action passive onClick={() => setModal(false)}>Cancel</Modal.Action>
            </Modal>
        </Grid.Container>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['price','common']),
    },
  })
export default Purchase
