import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";
import store from './reduxSetup/store';
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
