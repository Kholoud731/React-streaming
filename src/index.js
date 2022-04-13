import React from "react";
import ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose  } from "redux";
import { BrowserRouter} from "react-router-dom";
import App from './components/App';
import reducers from "./reducers";
import thunk from "redux-thunk";
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
        <App/>
        </BrowserRouter>
    </Provider>

)
