import { Grid } from "@geist-ui/react";


const PageLayout = ({children}) => (
    <Grid.Container direction="column" style={{background: 'rgb(236, 243, 246)',minHeight: '600px',height: '100%',padding: '40px 0px'}} justify="center" alignItems="center">
        <Grid xs direction="column">
            {children}
        </Grid>
    </Grid.Container>
)
export default PageLayout;