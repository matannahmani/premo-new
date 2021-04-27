import { Modal, Text, Image, Spacer, Button } from "@geist-ui/react"
import { useContext } from "react"
import { AppContext } from "../context/appcontext"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Minimize2 } from '@geist-ui/react-icons'
import { useTranslation } from 'next-i18next'


const ProductModal = ({modal, head , setModal,info}) => {
    const { t } = useTranslation('price')
    const [mobile,] = useContext(AppContext);
    const closeHandler = (event) => {
        setModal(false);
    }
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
    <>
      <Modal wrapClassName="product-modal" width={mobile.mobile ? '90vw' : '840px'} open={modal} onClose={closeHandler}>
        <Minimize2 onClick={closeHandler} className="product-modal-close"/>
        <Modal.Title className="product-modal-title">{head ? info.title : info.subtitle}</Modal.Title>
        <Modal.Subtitle className="product-modal-sub">
                {t('size')} {info.size}<br/>
                {t('battery')} {info.battery}
        </Modal.Subtitle>
        <Spacer y={mobile.mobile ? 2 : 1}/>
        <Modal.Content>
            <div className="product-modal-content">
            <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            organicArrows={mobile ? false : true}
            interval={6000}
            bullets={false}
            className="product-modal-slider"
          >
        {info.photo.map((e) => (
            <div key={e}>
                <Image src={e}/>
            </div>
        ))
        }
          </AutoplaySlider>
          <Spacer/>
            <Text className="product-modal-text">
            {info.children}
            </Text>
            </div>
            <Spacer/>
            <div className="product-modal-buttons">
                <Button className="btn-sm learnbtn">{t('learnmore')}</Button>
                <Button onClick={() => window.open(info.url)} className="btn-sm bluebtn learnbtn">{t('manual')}</Button>
            </div>
        </Modal.Content>
      </Modal>
    </>
    )

}

export default ProductModal;