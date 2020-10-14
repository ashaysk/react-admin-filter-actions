import React from 'react';
import {TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useFilterStyles = makeStyles({
    form: {
        width: 500,
    },
});

const PostFilterForm= ()=> {
  const classes = useFilterStyles();
  return (
    <>
    <TextField margin="none" className={classes.form}  label="search by name, category or keys" variant="standard" />
    <Button variant="outlined" color="primary">Search</Button>
    </>
    
  );
}

export default PostFilterForm