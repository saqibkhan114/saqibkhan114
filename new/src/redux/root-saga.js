import { all, call } from "redux-saga/effects";

import {productApiSagas}  from "./productswithApi-Sagas/products-api.saga"

export default function* rootSaga(){
    yield all([call(productApiSagas)])
}