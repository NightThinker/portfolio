import React, { Suspense } from 'react';
// import { Switch } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/Home/Home'));
const About = React.lazy(() => import('../pages/About/About'));
const Portfolio = React.lazy(() => import('../pages/Portfolio/Portfolio'));
const Contact = React.lazy(() => import('../pages/Contact/Contact'));

export default (
  <Suspense fallback={<p>Loading...</p>}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);
