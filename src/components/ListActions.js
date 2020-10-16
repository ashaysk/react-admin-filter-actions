import React, { useState } from 'react';
import {
    TopToolbar,
    sanitizeListRestProps,
} from 'react-admin';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import IconButton from '@material-ui/core/IconButton';
import AddFilter from './AddFilter';
const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    let [open, toggle] = useState(false);
    const togglePopup = () => {
        let flag = !open;
        toggle(flag);
    }
    return (
        <>
            <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
                <IconButton edge="end" onClick={togglePopup}>
                    <ViewColumnOutlinedIcon color="inherit" fontSize="default" />
                </IconButton>
                <IconButton edge="end">
                    <VerticalSplitOutlinedIcon color="inherit" fontSize="default" />
                </IconButton>
                {/* Add your custom actions */}
            </TopToolbar>
            {open ? <AddFilter /> : null}
        </>
    );
};

export default ListActions;