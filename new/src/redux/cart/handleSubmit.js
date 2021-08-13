import React from "react";
import cartReducer from '../../redux/cart/cart.reducer';


 const handleSubmit = e => {
    e.preventDefault();
    const action = {
      type: "CartActionTypes.ADD_ITEM",
      payload: {
        name: this.title.current.value,
        age: this.age.current.value
      }
    };
    const newState = cartReducer(this.title, action);
    this.setState(newState);
  };

export default handleSubmit;