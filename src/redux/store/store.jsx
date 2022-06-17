import {createStore , applyMiddleware , compose} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const myStore = createStore(rootReducer,enhancer(applyMiddleware(reduxThunk)));

export default myStore;