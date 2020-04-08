import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/MovieList';
import Detail from './Pages/Details/Detail';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;