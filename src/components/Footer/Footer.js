import { Grid, IconButton } from '@material-ui/core';
import { Facebook, GitHub, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

const Footer = () => {
    return (
        <Grid container style={{ height: "100px" }} direction="row" justify="center" alignItems="center">
            <Grid items>
                <IconButton href="https://www.facebook.com/rafi.aman3/">
                    <Facebook />
                </IconButton>
            </Grid >
            <Grid items>
                <IconButton>
                    <Instagram />
                </IconButton>
            </Grid>
            <Grid items>
                <IconButton>
                    <Twitter />
                </IconButton>
            </Grid>
            <Grid items>
                <IconButton>
                    <GitHub />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Footer;