import React from 'react';
import { List, Datagrid, TextField,ReferenceField } from 'react-admin';
import MyPostFilter from './MyPostFilter';

export const PostList = (props) => (
    <List title="List of Posts" exporter={false} filters={<MyPostFilter />}{...props}>
    <Datagrid>
    <TextField source="id" />
        <ReferenceField source="userId" reference="users">
        <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
   </Datagrid>
</List>
);


