import { Grid, Spacer, Tabs, Text } from "@geist-ui/react";

const Pricing = () => {

    return (
        <Grid.Container align="center" direction="column" style={{minHeight: 'calc(100vh - 280px)'}}>
            <Spacer y={3}/>
            <Grid xs justify="center">
                <Text h1 b>Saves you time and money while creating high guest satisfaction.</Text>
            </Grid>
            <Grid xs justify="center">
            <Tabs className="tabs" initialValue="1">
            <Tabs.Item label="Standard" value="1">The Evil Rabbit Jumped over the Fence.</Tabs.Item>
            <Tabs.Item label="Premium" value="2">The Fence Jumped over The Evil Rabbit.</Tabs.Item>
            </Tabs>
            </Grid>
        </Grid.Container>
    )
}

export default Pricing;