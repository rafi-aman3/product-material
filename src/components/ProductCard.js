import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { MoreVertOutlined, ShareOutlined } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';


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
        color: "blue"

    }

})

const ProductCard = (props) => {
    const { product } = props

    const classes = useStyles(props);




    return (
        <Grid  item xs={12} sm={6} md={4}>
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
                <Typography variant="body2" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </Grid>
    );
};

export default ProductCard;