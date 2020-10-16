import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '13%',
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        maxHeight: 400,
        right: 40,
        zIndex: '10',
        top: 60,
    },
    padding: {
        padding: '10px'
    },
    scroll: {
        maxHeight: 250,
        minHeight: 250,
        overflow: 'auto',
    }
}));

const AddFilter = () => {
    const classes = useStyles();
    const filterArr = [
        { name: 'Select All' },
        { name: 'Catalog ID' },
        { name: 'Catalog Name' },
        { name: 'Catalog Type' },
        { name: 'Catalog Type Value' },
        { name: 'Product Count' },
    ]
    const [checked, setChecked] = React.useState([0]);
    return (
        <>
            <Paper elevation={1} className={classes.root}>
                <Grid container item lg={12} className={classes.padding} direction="column" justify="center" alignItems="center">
                    <TextField id="outlined-search" placeholder="Search column name" size="small" type="search" variant="outlined" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }} />
                </Grid>

                <Grid container item lg={12} direction="column" justify="center" alignItems="flex-start">
                    <List dense disablePadding className={classes.scroll}>
                        {filterArr.map((value) => {
                            const labelId = `checkbox-list-label-${value}`;
                            console.log(value);
                            return (
                                <ListItem key={value.name}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={checked.indexOf(value.name) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            size="small"
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={value.name} />
                                </ListItem>
                            );

                        })}
                    </List>
                </Grid>
                <Grid container item lg={12} className={classes.padding} direction="row" justify="space-around" alignItems="center">
                    <Button variant="outlined" size="small">Cancel</Button>
                    <Button variant="contained" size="small">Apply</Button>
                </Grid>
            </Paper>
        </>

    )
}

export default AddFilter;