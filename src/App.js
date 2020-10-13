import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import TestPretty from './components/testPretty';
import ProductDetail from './components/productdetail';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/productDetail" exact component={ProductDetail} />
        <Route path="/" exact component={TestPretty} />
      </Switch>
    </div>
  );
}

export default App;
