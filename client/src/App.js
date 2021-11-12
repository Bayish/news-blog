import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Container} from '@material-ui/core';
import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";

const App = () => {

    return (
       <BrowserRouter>
           <Container maxWidth="lg">
               <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
           </Container>
       </BrowserRouter>
    );
};

export default App;