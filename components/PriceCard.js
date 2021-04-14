import { Button, Image, Text } from "@geist-ui/react";
import React, { useState } from 'react';
import ProductModal from './ProductModal';

const Pricecard = ({icon, title, oprice, price, children,head = true}) => {
    const [modal, setModal] = useState(false)
    const [info,setInfo] = useState({photo: []});
    const pitem = React.Children.map(children, child => child.type.displayName === 'PItem' ? 
    <>
    {child.props.subtitle !== undefined &&  <Text h3>{child.props.subtitle}</Text>}
    <div style={child.props.style} className="price-card-section-item">
    <Text p style={{maxWidth: '70%'}}>{child.props.title}</Text>
    <Text onClick={() => {setModal(true);setInfo({...child.props})}} span >Read Detalis</Text>
    </div> 
    </>
    : null);
    const uitem = React.Children.map(children, child => child.type.displayName === 'UItem' ? 
    <div className="price-card-section-item">
    <Text p>{child}</Text>
    </div> 
    
    : null);

    return (

        <div className="price-card">
            {head && (
                <>
                <Image className={`price-card-icon ${icon == "./king-i.svg" && 'icon-fix'}`} src={icon}/>
            <div className="price-card-header">
                <Text h2 className="price-card-header-title">{title}</Text>
                <Text p className="price-card-header-price"><span style={{textDecorationLine: 'line-through'}}>{oprice}</span><br/>{price}</Text>
                <Button className="learnbtn btn-md" auto size="large">구매하기</Button>
            </div>
            </>
            )}
            <div className="price-card-section">
            {head && <Text h3>패키지 구성</Text>}
                {pitem}
            </div>
            <div className="price-card-section">
                {head && <Text h3>서비스 활용</Text>}
                {uitem}
            </div>
            <ProductModal modal={modal} info={info} setModal={setModal}/>
        </div>
    )
}

const PItem = ({ children }) => children;
PItem.displayName = 'PItem';
Pricecard.PItem = PItem;
const UItem = ({ children }) => children;
UItem.displayName = 'UItem';
Pricecard.UItem = UItem;
export default Pricecard;