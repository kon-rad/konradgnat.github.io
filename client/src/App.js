import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './sass/main.scss';
import './scripts/index';
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
