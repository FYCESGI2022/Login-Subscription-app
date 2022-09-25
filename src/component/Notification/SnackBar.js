import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar(props) {

    const [openSnackBar, setOpenSnackBar] = useState(props.open);

    const handleClose = () => {
        setOpenSnackBar(false);
    };
    const vertical = props.vertical
    const horizontal = props.horizontal
    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openSnackBar}
                onClose={handleClose}
                message={props.message}
                key={props.vertical + props.horizontal}
            />
        </div>
    );
}
