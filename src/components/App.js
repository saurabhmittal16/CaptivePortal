import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChatBot from './ChatBot';
import Home from './HomeComponents/Index';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/chatbot' component={ChatBot} />
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;