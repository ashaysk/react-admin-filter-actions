import React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {PostList} from './components/PostList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
  //changes for commit.
  return (
    <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList}></Resource>
  </Admin>
  );
}

export default App;
