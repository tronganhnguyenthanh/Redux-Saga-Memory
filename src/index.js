import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App"
import reportWebVitals from "./reportWebVitals"
import {configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import {Provider} from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import postReducer from "./features/post.slice"
import watchPostsSaga from "./sagas/postSaga"
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
  reducer:{
   post:postReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare)
});
sagaMiddleWare.run(watchPostsSaga)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
