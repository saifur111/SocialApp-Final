import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../context/authProvider';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from '../components/Header/Header';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Profile from '../pages/profile/Profile';
import Home from '../pages/home/Home';
import Work from '../pages/work/Work';


const Routes = () => {
    return (
        <div className="">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/me">
                            <Profile></Profile>
                        </Route> 
                        <Route path="/apps">
                            <Work></Work>
                        </Route> 
                        {/* <PrivateRoute path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                        </PrivateRoute>*/}
                    </Switch>
                </BrowserRouter>
            </AuthProvider>   
        </div>
    );
};

export default Routes;