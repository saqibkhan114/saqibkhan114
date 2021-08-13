import ProductApiActionTypes from "./products-api.types";

export const getProductsFromAPI = () => ({
  type: ProductApiActionTypes.START_TO_GET_PRODUCTS_INFORMATION
});

export const getProductsSucceeded = () => ({
  type: ProductApiActionTypes.GET_PROD_INFO_SUCCEED,
});

export const getProductsFailed = () => ({
  type: ProductApiActionTypes.GET_PROD_INFO_FAILED,
});


