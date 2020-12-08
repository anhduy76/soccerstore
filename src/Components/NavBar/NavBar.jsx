import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import logo from "../../assets/favicon.ico";


const NavBar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color='inherit'>
                    <img src={logo} alt="San Co Store" height="25px" className={classes.image} />
                    Sân Cỏ Store
                </Typography>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;


