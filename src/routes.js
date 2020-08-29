import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Blog from './pages/Blog';

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/blog">
          <Blog />
        </Route>
        { props.children }
      </Switch>
    </Router>
  );
}
