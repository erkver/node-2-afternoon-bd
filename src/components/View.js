import React,{ Component } from "react";
import axios from "axios";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleProduct: []
    }
  }

  componentDidMount() {
    axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
      console.log("res", res);
      this.setState({singleProduct: res.data})
    }).catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    // const { singleProduct } = this.state;
    return (
      <div>
        <h1>{this.state.singleProduct[0] && this.state.singleProduct[0].name}</h1>
        {/* <h1>{singleProduct.description}</h1>
        <h1>{singleProduct.price}</h1>
        <h1>{singleProduct.image_url}</h1> */}
        {/* <h1>test from view</h1> */}
      </div>
    );
  }
}