import React from "react";

const Input = (props) => {
  return(
    <div>
      <input
        onChange={props.nameInput}
        type="text"
        placeholder="product"
      />
      <input
        onChange={props.descriptionInput}
        type="text"
        placeholder="description"
      />
      <input
        onChange={props.priceInput}
        type="number"
        placeholder="price"
      />
      <input
        onChange={props.imageInput}
        type="text"
        placeholder="img url"
      />
      <button 
        onClick={() => { props.addProduct(props.name, props.description, props.price, props.image); props.clear() }}>
        Submit
          </button>
    </div>
  )
}

export default Input;