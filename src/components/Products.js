import { Grid } from '@material-ui/core';
import React  from 'react';
import Content from './Content';
import Footer from './Footer/Footer';
import Header from './Header';
import Hero from './Hero';

const Products = () => {

    


    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
                <Hero />
            </Grid>
            <Grid item container>
                <Grid item xs="auto" sm={2} />
                <Grid item container justify="center" spacing={4} xs={12} sm={8}>
                    <Content />
                </Grid>
                <Grid item xs="auto" sm={2} />
            </Grid>
            <Footer />
        </Grid>
    );
};

export default Products;