import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../Containers/Layout.jsx';
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import Checkout from '../Pages/Checkout.jsx';
import CreateAccount from '../Pages/CreateAccount.jsx';
import MyAccount from '../Pages/MyAccount.jsx'
import NewPassword from '../Pages/NewPassword.jsx';
import Orders from '../Pages/Orders.jsx';
import RecoveryPassword from '../Pages/RecoveryPassword.jsx';
import SendEmail from '../Pages/SendEmail.jsx';
import NotFound from '../Pages/NotFound.jsx';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';
import '@Styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Checkout" component={Checkout} />
            <Route exact path="/CreateAccount" component={CreateAccount} />
            <Route exact path="/MyAccount" component={MyAccount} />
            <Route exact path="/NewPassword" component={NewPassword} />
            <Route exact path="/Orders" component={Orders} />
            <Route exact path="/recovery-password" component={RecoveryPassword} />
            <Route exact path="/SendEmail" component={SendEmail} />
            <Route path="*" component={NotFound} />
        </Switch>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;