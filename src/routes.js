import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Page from './pages/Page';

export default function Routes(props) {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact>
          <Page />
        </Route> */}
        { props.children }
      </Switch>
    </Router>
  );
}
