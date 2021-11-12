import React, {useState} from 'react';
import './styles';
import {Avatar, Button, Container, Grid, Paper, Typography} from '@material-ui/core';
import Icon from './icon';
import useStyles from './styles';
import {LockOpenOutlined} from "@material-ui/icons";
import Input from "./Input";
import GoogleLogin from "react-google-login";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {authSuccess, signin, signup} from '../../store/actions/auth'
import {Alert} from "@material-ui/lab";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isSignup, setIsSignup]= useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const {authError, authLoading} = useSelector(state => state.authReducer)

    const googleSuccess = async(res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch(authSuccess({result, token}));
            navigate('/');
        }catch(e){
            console.log(e)
        }
    };
    const googleFailure = (e) => {
        console.log(e)
        console.log('Google Sign In was unsuccessful! Try again.')
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, navigate))
        }else{
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleShowPassword = () => {
        setShowPassword(pre => !pre)
    }

    const switchMode =() => {
        setIsSignup(pre => !pre);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined/>
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? ' Sign Up' : ' Sign In'}
                </Typography>
                { authError && <Alert
                        className={classes.alert}
                        severity="error"
                    >{authError.message || authError.global}</Alert>
                }
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    autoComplete="new-firstName"
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    half
                                    value={formData.firstName}
                                />
                                <Input
                                    autoComplete="new-lastName"
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                    value={formData.lastName}
                                />

                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" autoComplete="new-email" value={formData.email}/>
                        <Input name="password" label="Password " handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} autoComplete="new-password" value={formData.password}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" value={formData.confirmPassword}/>}
                    </Grid>
                    <ButtonWithProgress loading={authLoading} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? 'Sign Up' : 'Sign In'}</ButtonWithProgress>
                    <GoogleLogin
                        clientId="473808104424-llnilhor77n6pis5s866oj1mu1b2q0h5.apps.googleusercontent.com"
                        render={renderProps => (
                            <Button
                                className={classes.googleButton}
                                color="primary"
                                fullWidth
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon/>}
                                variant="contained"
                            >
                                Google Sign in
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In!' : "Don't have an account? Sign Up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;