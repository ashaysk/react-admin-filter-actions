import React from 'react';
import {Filter, SearchInput} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import PostFilterForm from './PostFilterForm';

const useFilterStyles = makeStyles({
    form: {
        width: 500,
    },
});

const MyPostFilter= ( props)=>{
    const classes = useFilterStyles();
    return(
        // <Filter {...props}>
        // <SearchInput className={classes.form} source="q" alwaysOn/>
        // </Filter>

        <Filter classes={classes} {...props}>
         <PostFilterForm {...props} source="q" alwaysOn/> 
         </Filter>
        
      
    );
}

export default MyPostFilter