import React, {Component} from 'react';
import productsData from '../../exercise-2/mockups/data.json'
import {Link} from "react-router-dom";

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
        <Link to={"/products/"+this.state.products.bicycle.id}>{this.state.products.bicycle.name}</Link>
        </li>
        <li>
        <Link to={"/products/"+this.state.products.TV.id}>{this.state.products.TV.name}</Link>
        </li>
        <li>
        <Link to={"/products/"+this.state.products.pencil.id}>{this.state.products.pencil.name}</Link>
        </li>
      </div>
    )
  }
}

export default Products;
