import React from 'react';
//import Button from 'mytestpackage';
import Button from '@material-ui/core/Button';
const Detail = (props) => {
    const clickHandler = () => props.history.push('/');
    return (
        <Button variant="contained" color="primary" onClick={clickHandler}>Back</Button>
    )
}

export default Detail;