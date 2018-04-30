import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
// import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
// import StackMenu from '../src/components/menu/StackMenu';

// import Test from '../dev_off/Test';

// import ColorView from './components/single-item-page/color/ColorView'

// store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// )

render(<AppRouter />, document.getElementById("app"));
