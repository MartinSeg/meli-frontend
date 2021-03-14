import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { itemDetailsReducer } from "./reducers/itemDetailsReducer";
import { searchItemsReducer } from "./reducers/searchItemsReducer";

const initialState = {}

export const middlewares = [thunk]

export const reducer = combineReducers({
    searchItems: searchItemsReducer,
    itemDetails: itemDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
 