import { Button, Grid, Input, Modal, Note, Slider, Spacer } from "@geist-ui/react"
import { Truck } from "@geist-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import DaumPostcode from 'react-daum-postcode';
import ProductCard from "../components/productCard";
import {Cancel,Tos} from '../components/tos';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { purchaseLink } from "../lib/userapi";
import { UserContext } from "../context/appcontext";


const SubInfo = ({title,sub,style}) => {
    return (
        <div className="purchase-detail-item">
        <span>{title}</span>
        <span style={style} className="sub">{sub}</span>
        </div>
    )
}

const AnimDiv = ({akey,children}) => (
    <motion.div
    key={akey}
    style={{width: '100%',maxWidth: '640px', overflow: "hidden",padding: '16px',margin: '40px 0px',background: 'white',borderRadius: '16px',boxShadow: '0 5px 10px rgb(0 0 0 / 12%)' }}
    initial={{ opacity: 0,height: 20 }}
    animate={{ opacity: 1,height: "auto" }}
    exit={{ opacity: 0,height: 20 }}
    transition={{ duration: 0.5 }}>
    {children}
    </motion.div>
)

const Purchase = () => {
    const [modal,setModal]= useState(false);
    const [step,setStep] = useState(1);
    const [guser,] = useContext(UserContext);
    const [price,setPrice] = useState(0);
    const [loading,setLoading] = useState(false);
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
        if (step === 4) return true;
        return false
    }
    const handleProduct = (flag) =>{
        if (router.query.item === "Standard") // set max height to block card growing in height as animation enters
            return <ProductCard buy={t('price:buy')} style={{margin: '0px auto 32px auto',maxHeight: '144px',maxWidth: '100%'}} onChange={(e) => setPrice(e)} qtyselect={true} price={24900} purchase={true} disabled={flag} title="Standard" description={t('price:tab-btn-s-price1')} icon="./king-i.svg"/>
        if (router.query.item === "Premium")
            return <ProductCard buy={t('price:buy')} style={{margin: '0px auto 32px auto',maxHeight: '144px',maxWidth: '100%'}} onChange={(e) => setPrice(e)} qtyselect={true} price={44900} purchase={true} disabled={flag} title="Premium" description={t('price:tab-btn-p-price1')} icon="./diamond-i.svg"/>
    }
    const handlePurchase = async () => {
        setLoading(true);
        let product;
        if (router.query.item === "Standard")
            product = "PKGS-KR"
        if (router.query.item === "Premium")
            product = "PKGP-KR"
        const result = await purchaseLink({
            userid: guser.pinfo.id,
            prod: product,
            qty: parseInt(router.query.qty),
            'redirect-url': `https://${location.hostname}/user/payment`,
            'buyer-name': user.name,
            'buyer-email': user.email,
            'buyer-phone': user.phone,
            'buyer-addr': user.address,
            'buyer-post': user.zipcode,
        })
        window.open(result.data);
        router.push('/user/payment')
    }
    useEffect(() => {
        if(!router.isReady) return;
        if (router.query.item !== ("Standard") && router.query.item !== ("Premium") || !guser.logged)
            router.push('/')
    },[router.isReady,router.query])
    const subDate = (year) => {
        const subDate = new Date();
        subDate.setFullYear(subDate.getFullYear() + year);
        return subDate;
    }
    return (
        <Grid.Container style={{padding: '40px',background: '#ECF3F6'}} alignItems="center" direction="column">
            <Grid style={{minHeight: '540px',position: 'relative',width: '540px'}} direction="column" alignItems="center" xs={24} sm={24} md={16} lg={14} xl={12}>
                <Slider value={step} className="purchase-slider" initialValue={1} min={1} showMarkers={true} disabled max={4}/>
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
                    <Note label={false} type="secondary">{t('common:VAT0')} {t('common:VAT1')} <b>₩{(price * 0.1).toFixed(2)}</b> {t('common:VAT2')} : <b>₩{(price * 1.1).toFixed(2)}</b></Note>
                </AnimDiv>
                }
                {step === 4 &&
                <AnimDiv key="pstep4" akey="step4">
                <h2 className="purchase-title">{t('common:packageComponents')} :</h2>
                <Spacer/>
                {handleProduct(true)}
                <SubInfo title='' style={{maxWidth: '100%',width: '100%',fontSize: '10px'}} sub={router.query.item === "Standard" ? t('common:standardPackageComponents') : t('common:premiumPackageComponents')}/>
                <Spacer/>
                <h2 className="purchase-title">{t('common:shippingInfo')} :</h2>
                <SubInfo title={t('common:name')} style={{fontSize: '10px'}} sub={`${user.name}`}/>
                <SubInfo title={t('common:tel')} style={{fontSize: '10px'}} sub={`${user.phone}`}/>
                <SubInfo title={t('common:shipping')} style={{fontSize: '10px'}} sub={`${user.address} ${user.addressdetailed}`}/>

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
                    <Note label={false} type="secondary">{t('common:VAT0')} {t('common:VAT1')} <b>₩{(price * 0.1).toFixed(2)}</b> {t('common:VAT2')} : <b>₩{(price * 1.1).toFixed(2)}</b></Note>
                </AnimDiv>
                }
                </AnimatePresence>
                <Spacer/>
                <div className="purchase-nav">
                    <Button size="small" type="abort" className={!stepHandler(false) ? 'disabled btn-des' : 'btn-des'} onClick={() => stepHandler(false) && setStep(step -1)}>{t('common:back')}</Button>
                    <Button size="small" className={!stepHandler(true) ? 'disabled learnbtn' : 'learnbtn'} onClick={() => stepHandler(true) ? step === 4 ? setModal(true) : setStep(step +1) : null}>{ step !== 4 ? t('common:nextStep') : t('common:purchase')}</Button>
                </div>
            </Grid>
            <Modal open={modal} onClose={() => setModal(false)}>
                {step === 4 ?
                <>
                <h2 className="purchase-title">{t('common:acceptTermsofService')} :</h2>
                <Tos/>
                <h2 className="purchase-title">{t('common:refundInfo')} :</h2>
                <Cancel/>
                </>
                :
                <DaumPostcode onComplete={handleComplete}/>
                }
                {step === 4 &&
                <Modal.Action loading={loading} passive onClick={() => handlePurchase()}>{t('common:purchase')}</Modal.Action>
                }
                <Modal.Action loading={loading} passive onClick={() => setModal(false)}>{t('common:back')}</Modal.Action>
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
