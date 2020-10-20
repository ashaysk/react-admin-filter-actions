import React from 'react';
import { Form } from 'react-final-form';
import { Box, Button, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { TextInput, NullableBooleanInput, useListContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useFilterStyles = makeStyles({
    form: {
        width: 500,
    },
});
const MyPostFilter = (props) => {
    const classes = useFilterStyles();
    let form = null;
    const {
        displayedFilters,
        filterValues,
        setFilters,
        hideFilter,
    } = useListContext();

    const onSubmit = values => {
        if (Object.keys(values).length > 0) {
            setFilters(values);
        } else {
            resetFilter(values);
        }
    };

    const resetFilter = (val) => {
        val = filterValues;
        setFilters({}, []);
    };

    if (props.context === "form") {
        form = (
            <>
                <Form onSubmit={onSubmit} initialValues={filterValues}>
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box width="500" mt={4} />
                            <Box display="flex" alignItems="flex-end" mb={1}>
                                <Box width="auto" component="span" mr={2}>
                                    <TextInput
                                        resettable
                                        className={classes.form}
                                        helperText={false}
                                        source="q"
                                        label="Search by Prod Catlog Id, Catalog Name or Keywords"
                                        variant="standard"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment>
                                                    <ClearIcon color="disabled" fontSize="small" onClick={(val) => resetFilter(val)} />

                                                    <SearchIcon color="disabled" />
                                                </InputAdornment>
                                            )
                                            // startAdornment: (
                                            //     <InputAdornment>
                                            //         {<ClearIcon color="disabled"  fontSize="small" onClick={(val)=>resetFilter(val)}/>

                                            //         <SearchIcon color="disabled" />
                                            //     </InputAdornment>
                                            // )
                                        }}
                                    />
                                </Box>

                                <Box component="span" mr={2} mb={1.5}>
                                    <Button variant="outlined" type="submit">
                                        Search
                    </Button>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Form>
            </>
        )
    } else {
        form = null;
    }


    return (
        <>
            {form}
        </>
    );
};

export default MyPostFilter;