import { Grid, Spacer, Text, useTabs } from "@geist-ui/react";
import Tabs from '../components/Tabs';
import Pricecard from "../components/PriceCard";
import {AnimatePresence} from 'framer-motion';
const Pricing = () => {
    const { setState, bindings } = useTabs('1')

    return (
        <Grid.Container className="price-section">
            {/* <Spacer y={3}/> */}
            {/* <Grid xs justify="center">
                <Text h3 b>Saves you time and money while creating high guest satisfaction.</Text>
            </Grid> */}
            <Grid xs justify="center">
            <div>
                <Tabs/>
            </div>
            </Grid>
        </Grid.Container>
    )
}

export default Pricing;