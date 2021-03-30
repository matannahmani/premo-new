import { Modal, Text, Image, Spacer, Button } from "@geist-ui/react"
import { useContext, useState } from "react"
import { AppContext } from "../context/appcontext"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const ProductModal = ({modal, setModal,info}) => {
    const [mobile,] = useContext(AppContext);
    const closeHandler = (event) => {
        setModal(false);
    }
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
    <>
      <Modal wrapClassName="product-modal" width={mobile.mobile ? '90vw' : '840px'} open={modal} onClose={closeHandler}>
        <Modal.Title className="product-modal-title">{info.title}</Modal.Title>
        <Modal.Subtitle className="product-modal-sub">
                Size : {info.size}<br/>
                Battery : {info.battery}
        </Modal.Subtitle>
        <Spacer y={mobile.mobile ? 2 : 1}/>
        <Modal.Content>
            <div className="product-modal-content">
            <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            organicArrows={true}
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
                <Button className="btn-sm learnbtn">더 알아보기</Button>
                <Button onClick={() => window.open(info.url)} className="btn-sm bluebtn learnbtn">메뉴얼 다운로드</Button>
            </div>
        </Modal.Content>
      </Modal>
    </>
    )

}

export default ProductModal;