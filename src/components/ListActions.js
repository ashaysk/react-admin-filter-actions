import * as React from 'react';

import {
    TopToolbar,
    sanitizeListRestProps,
} from 'react-admin';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import IconButton from '@material-ui/core/IconButton';
const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            <IconButton edge="end">
                <ViewColumnOutlinedIcon color="inherit" fontSize="default" />
            </IconButton>
            <IconButton edge="end">
                <VerticalSplitOutlinedIcon color="inherit" fontSize="default" />
            </IconButton>
            {/* Add your custom actions */}
        </TopToolbar>
    );
};

export default ListActions;