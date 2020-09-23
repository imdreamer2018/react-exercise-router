import React, {Component} from 'react';
import productsData from '../../exercise-2/mockups/data.json'


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: Object.values(productsData).filter(product => {
        return product.id === Number(this.props.match.params.id);
      }),
    };
  }

  render() {
    return (
      <div>
        <h2>Product Details</h2>
        <ul>
          <li>Name: {this.state.product[0].name}</li>
          <li>Id: {this.state.product[0].id}</li>
          <li>Price: {this.state.product[0].price}</li>
          <li>Quantity:{this.state.product[0].quantity}</li>
          <li>Desc: {this.state.product[0].desc}</li>
          <li>Website: {"/product/" + this.state.product[0].id}</li>
        </ul>
      </div>
    )
  }
}

export default Product;
