import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";
import MyProfiles from "./MyProfiles";
import AboutUs from "./AboutUs";
import Home from "../../exercise-4/components/Home";
import Products from "./Products";
import Product from "./Product";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header/>
          <Route exact path="/my-profiles" component={MyProfiles}/>
          <Route exact path="/about-me" component={AboutUs}/>
          <Route exact path="/products" component={Products}/>
          <Route path="/products/:id" component={Product}/>
          <Route exact path="/" component={Home}/>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
