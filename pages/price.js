import { Grid, Spacer, Text } from "@geist-ui/react";
import Tabs from "../components/Tabs";

const Pricing = () => {

    return (
        <Grid.Container align="center" direction="column" style={{minHeight: 'calc(100vh - 280px)'}}>
            <Spacer y={3}/>
            <Grid xs justify="center">
                <Text h1 b>Saves you time and money while creating high guest satisfaction.</Text>
            </Grid>
            <Grid xs justify="center">
                <Tabs title="test">
                    <Tabs.Body>
                        <div>Hello world</div></Tabs.Body>
                </Tabs>
            </Grid>
        </Grid.Container>
    )
}

export default Pricing;