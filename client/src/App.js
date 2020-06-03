import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Todolist from "./containers/Todolist/Todolist";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todolist />
      </div>
    </Provider>
  );
}

export default App;
