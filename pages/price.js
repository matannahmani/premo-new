import { Grid, Spacer, Text, Tabs } from "@geist-ui/react";

const Pricing = () => {

    return (
        <Grid.Container className="price-section" align="flex-start" direction="column">
            <Spacer y={3}/>
            {/* <Grid xs justify="center">
                <Text h3 b>Saves you time and money while creating high guest satisfaction.</Text>
            </Grid> */}
            <Grid xs justify="center">
            <Tabs initialValue="1">
            <Tabs.Item label="evil rabbit" value="1">The Evil Rabbit Jumped over the Fence.</Tabs.Item>
            <Tabs.Item label="jumped" value="2">The Fence Jumped over The Evil Rabbit.</Tabs.Item>
            </Tabs>
            </Grid>
        </Grid.Container>
    )
}

export default Pricing;