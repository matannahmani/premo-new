import { Button, Image, Text } from "@geist-ui/react"
import React from 'react';
const Pricecard = ({ukey,icon, title, oprice, price, children}) => {
    const pitem = React.Children.map(children, child => child.type.displayName === 'PItem' ? 
    <div className="price-card-section-item">
    <Text p>{child}</Text>
    <Text span >Read Detalis</Text>
    </div> 
    
    : null);
    const uitem = React.Children.map(children, child => child.type.displayName === 'UItem' ? 
    <div className="price-card-section-item">
    <Text p>{child}</Text>
    </div> 
    
    : null);

    return (

        <div className="price-card">
            <Image src={icon} className="price-card-icon"/>
            <div className="price-card-header">
                <Text h2 className="price-card-header-title">{title}</Text>
                <Text p className="price-card-header-price"><span style={{textDecorationLine: 'line-through'}}>{oprice}</span><br/>{price}</Text>
                <Button className="learnbtn btn-md" auto size="large">Start Subscription</Button>
            </div>
            <div className="price-card-section">
                <Text h3>Package Configuration</Text>
                {pitem}
            </div>
            <div className="price-card-section">
                <Text h3>Utilization Service</Text>
                {uitem}
            </div>
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