import React, {useEffect, useState} from 'react';
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import useStyles from './styles.js'
import {useDispatch} from "react-redux";
import {LOGOUT_SUCCESS} from "../../constans/actionTypes";
import decode from 'jwt-decode';
import UserMenu from "../UI/AppToolbar/Menu/UserMenu";
import Anonymous from "../UI/AppToolbar/Menu/Anonymous";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));


    const logOut = () => {
        dispatch({type: LOGOUT_SUCCESS});
        navigate('/auth');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logOut()
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [user?.token, location]);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid
                        container
                        spacing={0}
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography component={Link} to="/" className={classes.heading}>Blog-news</Typography>
                        <Grid item xs={12} sm={6} md={3} className={classes.align}>
                            {user ? (
                                <UserMenu user={user} classes={classes} logOut={logOut}/>
                            ) : (
                                <Anonymous/>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>

    );
};

export default Navbar;