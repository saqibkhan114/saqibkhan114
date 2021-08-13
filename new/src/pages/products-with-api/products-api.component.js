//import { render } from "@testing-library/react";
import React from "react";
import {connect} from "react-redux";
import {getProductsFromAPI} from '../../redux/productswithApi-Sagas/products-api.actions'
import {getProductsFromAPIAsync} from '../../redux/productswithApi-Sagas/products-api.saga'


class ProductsWithApi extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(getProductsFromAPI())}>
          Get Products from an API
        </button>

        {this.props.loading ? (
          <p>Loading...</p>
        ) : this.props.error ? (
          <p> Error</p>
        ) : (
          <p>this.props.products</p>
        )}
      </div>
    );
  }
}

export default connect(null,null)(ProductsWithApi);
