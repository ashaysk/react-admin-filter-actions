import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchInput } from 'react-admin';

const useFilterStyles = makeStyles({
  form: {
    width: 500,
  },
});

const PostFilterForm = () => {
  const classes = useFilterStyles();
  return (
    <>
      {/* <TextField margin="none" className={classes.form}  label="search by name, category or keys" variant="standard" /> */}
      <SearchInput className={classes.form} source="q" alwaysOn variant="standard" />
      <Button variant="outlined">Search</Button>
    </>

  );
}

export default PostFilterForm