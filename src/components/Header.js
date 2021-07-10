import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Brightness4Outlined, HomeOutlined, NotificationImportantOutlined, ShoppingBasketOutlined, WbSunny } from '@material-ui/icons';
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { changeMode, selectMode } from '../features/darkMode/darkModeSlice';
import CurrencyDropdown from './CurrencyDropdown';

const useStyles = makeStyles(theme => ({
    header: {
        flex: 1
    },

    navColor: {
        [theme.breakpoints.up("sm")]: {
            backgroundColor: "green"
        }
    }
}
))



const Header = () => {
    const classes = useStyles();

    const mode = useSelector(selectMode);
    const dispatch = useDispatch();

    const history = useHistory();



    return (
        <AppBar position="static" className={classes.navColor}>
            <Toolbar >
                <Typography className={classes.header} >
                    <Link to="/" style={{textDecoration: "none", color: "#fff"}}>Products</Link>
                </Typography>
                <IconButton onClick={() => history.push("/")}>
                    <HomeOutlined />
                </IconButton>
                <IconButton>
                    <NotificationImportantOutlined />
                </IconButton>
                <IconButton onClick={() => history.push("/order")}>
                    <ShoppingBasketOutlined />
                </IconButton>
                <IconButton onClick={() => {
                    dispatch(changeMode())
                }}>
                    {
                        mode ? <Brightness4Outlined /> : <WbSunny />

                    }
                </IconButton>
                <CurrencyDropdown/>
                
                
                <Button>Rafi Aman</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;