import React from "react";
//import MyCard from 'materialcard';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';



const Pretty = (props) => {
  const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

  return (
    <Admin dataProvider={dataProvider} >
      <Resource name="users" list={ListGuesser} />
    </Admin>

  )
};

export default withRouter(Pretty);
