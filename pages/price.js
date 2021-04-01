import { Grid, Spacer, Text, useTabs } from "@geist-ui/react";
import Tabs from '../components/Tabs';
import Pricecard from "../components/PriceCard";
import {AnimatePresence} from 'framer-motion';
const Pricing = () => {
    const { setState, bindings } = useTabs('1')

    return (
        <Grid.Container className="price-section">
            <div className="product-one-shape-5"></div>
            <div className="product-one-shape-5 top left"></div>
            <div className="product-one-shape-5 bottom left"></div>
            <div className="product-one-shape-5 bottom right"></div>
            <Grid xs style={{minHeight: '940px'}} align="center" direction="column">
            <Spacer y={3}/>
                <Text className="price-section-title" h1>호스트의 시간과 비용을 절약해주고 게스트에게는 높은 만족을 줍니다.</Text>
            <div>
                <Tabs/>
            </div>
            </Grid>
        </Grid.Container>
    )
}

export default Pricing;