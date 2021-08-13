import { call, put, all, takeEvery } from "redux-saga/effects";
import ProductApiActionTypes from "./products-api.types";
import {
  getProductsSucceeded,
  getProductsFailed,
} from "./products-api.actions";

function* watchGetProductsFromAPI() {
  yield takeEvery(
    ProductApiActionTypes.START_TO_GET_PRODUCTS_INFORMATION,
    getProductsFromAPIAsync
  );
}

function* getProductsFromAPIAsync() {
  try {
    yield call(async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      put(getProductsSucceeded(data)); //dispatching next action
    });
  } catch (error) {
    put(getProductsFailed()); //dispatched error action
  }
}

export function* productApiSagas() {
  yield all([call(watchGetProductsFromAPI)]);
}
