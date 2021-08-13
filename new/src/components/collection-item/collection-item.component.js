import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import "./circle.scss";


const CollectionItem = ({items,addItem,removeItem}) => 
{
//  const { title, price, imageUrl } = item;
 // const { item } = props;
 // console.log('item is',props.item);


return items.map(item => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
    }}
    />
    <div className="collection-footer">
      <span className="name">{item.title}</span>
    </div>
        <div className="minus"
           style={{
            backgroundColor:'red',
            margin:20,
        }}
        onClick={() => removeItem(item)}>
        </div>
        <div className="plus"
        
        style={{
          backgroundColor:'red',
      }}
        onClick={() => addItem(item)}>
        </div>


  </div>
));
    };
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);