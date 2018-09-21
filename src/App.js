import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import './App.css';
import Input from "./components/Input";
import List from "./components/List";
import View from "./components/View";
import routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      name: "",
      description: "",
      price: 0,
      image_url: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => {
        // console.log("res", res);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  addProduct = (name, description, price, image_url) => {
    axios
      .post('/api/product', { name, description, price, image_url })
      .then(res => { 
        console.log("res:", res);
        this.setState({products: res.data})
      }).catch(err => console.log(err));
  }

  deleteProduct = (product_id) => {
    axios
      .delete(`/api/product/${product_id}`)
      .then(res => {
        console.log("res:", res);
        this.setState({products: res.data});
      }).catch(err => console.log(err));
  }

  editProduct = (product_id, description) => {
    axios 
      .put(`/api/product/${product_id}`, {description})
      .then(res => {
        console.log(product_id);
        this.setState({products: res.data})
      }).catch(err => console.log(err));
  }

  clearInputs = () => {
    this.setState({ name: "", description: "", price: 0, image_url: "" })
  }

  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  }

  handleDescriptionInput = (e) => {
    this.setState({description: e.target.value});
  }

  handlePriceInput = (e) => {
    this.setState({ price: e.target.value });
  }

  handleImgInput = (e) => {
    this.setState({ image_url: e.target.value });
  }
  render() {
    const { products, name, description, price, image_url } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Black Diamond</h1>
            <Input name={name} description={description} price={price} image={image_url} nameInput={this.handleNameInput} descriptionInput={this.handleDescriptionInput} priceInput={this.handlePriceInput} imageInput={this.handleImgInput} addProduct={this.addProduct} clear={this.clearInputs} />
          </header>
          <List 
            products={this.state.products}
            deleteProduct={this.deleteProduct}
            description={this.state.description}
            editProduct={this.editProduct}
            clear={this.clearInputs}
            edit={this.handleDescriptionInput}
          />
          {routes}
          {/* <Switch>
            <Route path="/" exact component={App} />
            <Route path={`/product/:id`} component={View}/>
          </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
