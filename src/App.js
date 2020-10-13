import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import UsersMain from './components/UsersMain';
import ProductDetail from './components/productdetail';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/productDetail" exact component={ProductDetail} />
        <Route path="/" exact component={UsersMain} />
      </Switch>
    </div>
  );
}

export default App;
