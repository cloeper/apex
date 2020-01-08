import React from "react";
import { Provider } from "react-redux";
import styles from "./App.module.css";
import { store } from "../store";

import { Search } from "../Search/Search";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.appContainer}>
        <Search />
      </div>
    </Provider>
  );
};

export default App;
