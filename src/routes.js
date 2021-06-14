import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Blog from './pages/Blog';
import Feed from './pages/Feed';
import Library from './pages/Library';
import Post from './pages/Post';
import Settings from './pages/Settings';

export default function Routes(props) {
  // AppContext
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Feed />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        { props.children }
      </Switch>
    </Router>
  );
}
