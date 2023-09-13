import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [thunk]

if (process.env.NODE_ENV === 'development'){
    middleWares.push(logger)
}

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares)
)