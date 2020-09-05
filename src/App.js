import React, { Component } from "react";
import addmovies from "./Component/movies/addmovies";
import moviesfilter from "./Component/movies/moviesFilter";
import moviesurl from "./Component/movies/moviesurl";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return <Switch>
    
     <Route path="/moviesFilter">< nameForm/>Recherche de film</Route>
     <Route path="/moviesurl">< newUrl/></Route>
     <Route path="/addmovies">< addMovie/>Ajout d'un nouveau film</Route>
     </Switch>;
}

    
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


export default App;
