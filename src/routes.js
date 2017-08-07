import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    Repositories,
    Readme
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>
      <Route path="/:user" component={Repositories} />
      <Route path="/:user/:project" component={Readme} />

    </Route>
  );
};
