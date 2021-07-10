import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrency } from '../features/currencyMode/currencyModeSlice';


const useStyles = makeStyles({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    cardStyle: {
        border: props => (props.cool ? '1px solid red' : '1px solid blue')
    },

    cardColor: {
        color: "black"

    }

})

const ProductCard = (props) => {
    const { product, currencyConverter } = props
    const currentCurrency = useSelector(selectCurrency);


    const classes = useStyles(props);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card raised className={classNames(classes.cardStyle, classes.cardColor)}>
                <CardHeader
                    avatar={<Avatar>{product.name[0].toUpperCase()}</Avatar>}
                    action={
                        <IconButton>
                            <MoreVertOutlined />
                        </IconButton>
                    }

                    title={product.name}
                    subheader={product.type}

                >

                </CardHeader>
                <CardActionArea>
                    <CardMedia style={{ height: '150px' }} title={product.name} image={product.image} />
                </CardActionArea>

                <CardContent>


                    <Typography variant="subtitle1" component="p">${product.price}</Typography>
                    {
                        currentCurrency ?
                            <Typography variant="subtitle1" component="p">({+(product.price * currencyConverter).toFixed(2)} {currentCurrency})</Typography> : ''
                    }
                </CardContent>
                <CardActions>
                    <Button size="small">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProductCard;