import ProductApiActionTypes from "./products-api.types";

const INITIAL_STATE = {
  loading: false,
  products : [],
  error: false
};

const productApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductApiActionTypes.START_TO_GET_PRODUCTS_INFORMATION:
      return {
        products: [],
        loading: true,
        error: false
      };
    case ProductApiActionTypes.GET_PROD_INFO_SUCCEED:
      return {
        products: action.payload.products,
        loading: false,
        error: false,
      };
    case ProductApiActionTypes.GET_PROD_INFO_FAILED:
      return {
        products: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default productApiReducer;
