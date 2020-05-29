import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './Components/responsive.css'


const Main = lazy(()=> import('./Components/Body.js'));
const Suggestion = lazy(()=> import('./Components/Suggestion.js'));



function App() {
  

  return (
    <Router>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/"  render={props =>  <Main {...props} /> } />
        <Route exact path="/suggestion" render={props =>  <Suggestion {...props} /> }/>
        
      </Switch>
    </Suspense>
  </Router> 
  );
}

export default App;
