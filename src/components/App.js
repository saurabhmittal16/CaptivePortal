import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChatBot from './ChatBot';
import Home from './HomeComponents/Index';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={ChatBot} />
                    <Route path='/home' component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;