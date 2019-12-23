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
              to="Portafolio/AboutMe" />
            <Switch>
              <Route
                path="Portafolio/AboutMe"
                component={AboutMe} />
                <Route
                path="Portafolio/Proyectos"
                component={Projects} />
                <Route
                path="Portafolio/Contacto"
                component={Contact} />
            </Switch>
          </React.Fragment>
        </Router>
    )
}

export default Routes;