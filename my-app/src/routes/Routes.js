import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import AboutMe from '../views/AboutMe'
import Projects from '../views/Projects';
import Contact from '../views/Contact';

const Routes = () => {
    return (
        <Router>
        <React.Fragment>
          <Redirect
              exact
              from="/"
              to="/AboutMe" />
            <Switch>
              <Route
                path="/AboutMe"
                component={AboutMe} />
                <Route
                path="/Proyectos"
                component={Projects} />
                <Route
                path="/Contacto"
                component={Contact} />
            </Switch>
          </React.Fragment>
        </Router>
    )
}

export default Routes;