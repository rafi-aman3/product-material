import { Container, Divider, makeStyles, Paper, Typography, useTheme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles({
    root: {
        height: '50vh'
    },
    hero: {
        margin: 20,
        padding: 20
    },
    paperStyle: {
        borderRadius: "20px"
    }
})
const Hero = () => {

    const classes = useStyles();
    const theme2 = useTheme();

    return (
        <Container className={classes.root}>
            <Paper elevation={4} square className={classes.paperStyle}>
                <Typography
                    color="secondary"
                    align="center"
                    variant="h3"
                    className={classes.hero}
                >
                    Discover the world’s top designers & creatives
                    <Divider/>

            </Typography>
                <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    align="center"
                >
                    the leading destination to find & showcase creative work and home to the world's best design professionals
            </Typography>

            </Paper>

        </Container>
    );
};

export default Hero;