import React, {Component} from 'react';
import productsData from '../../exercise-2/mockups/data.json'
import Product from "./Product";
import {Link, Route} from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productsData,
    };
  }


  render() {
    return (
      <div>
        <h1>All products</h1>
        <li>
        <Link to="/products/1">{this.state.products.bicycle.name}</Link>
        </li>
        <li>
        <Link to="/products/2">{this.state.products.TV.name}</Link>
        </li>
        <li>
        <Link to="/products/3">{this.state.products.pencil.name}</Link>
        </li>
      </div>
    )
  }
}

export default Products;
