import React, {useEffect, useState} from 'react';
import {Container, Grid, Grow} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../../components/Form/Form";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/actions/posts";
import {toast} from "react-toastify";

const useStyles = makeStyles(theme => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}))

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);



    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch"
                      spacing={3}>
                    <Grid item xs={12} md={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={7} md={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;