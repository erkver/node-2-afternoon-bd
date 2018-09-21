import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    let productList = this.props.products.map((product, i) => {
    return(
       <div>
        <Link to={`/product/${product.product_id}`} key={i}>
          <div>
            {product.name} - {product.description}
          </div>
        </Link>
        <button
          onClick={() => this.props.deleteProduct(product.product_id)}
        >
          Delete
        </button>
        <input type="text" placeholder="edit description" onChange={this.props.edit} />
        <button onClick={() => {
            this.props.editProduct(product.product_id, this.props.description);
            this.props.clear();
          }}>
          Submit edit
        </button>
      </div>
    )
    })
    return <div>{productList}</div>
  }
}

export default List;