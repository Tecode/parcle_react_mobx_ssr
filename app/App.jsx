// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React from 'react';
import importedComponent from 'react-imported-component';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './containers/NavBar';
import 'antd/dist/antd.less';

import HelloWorld from './containers/HelloWorld';

const HelloWorld2 = importedComponent(() => import('./containers/HelloWorld2'));
const Article = importedComponent(() => import('./containers/Article'));

export default function App() {
  return (
    <NavBar>
      <Helmet defaultTitle="Hello World!">
        <meta charSet="utf-8" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/codeSplit" component={HelloWorld2} />
        <Redirect to="/" />
      </Switch>
    </NavBar>
  );
}
