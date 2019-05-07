import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  Search
} from "./pages";

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} /> /* exact keyword for matching root(/) path */
      <Route path="/search" component={Search} />
      <Route path="/search/:title" component={Search} />
    </div>
  );
}

export default App;
