import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import AboutMe from '../views/AboutMe'
import Projects from '../views/Projects';
import Contact from '../views/Contact';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/AboutMe' component={AboutMe}/>
            <Route exact path='/Projects' component={Projects}/>
            <Route exact path='/Contact' component={Contact}/>
        </Switch>
    )
}

export default Routes;