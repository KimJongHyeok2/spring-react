import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Pages
import Main from './pages/main';
import Move from './pages/move';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/move" component={Move} />
    </Router>
  );
}

export default App;
