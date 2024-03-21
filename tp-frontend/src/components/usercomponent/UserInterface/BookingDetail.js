import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DialogTitle from '@mui/material/DialogTitle';
import Information from './Information';
import { useState } from 'react';
export default function BookingDetails(props) {
     console.log("ADD",props)

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        props.setState(false)
    };
    return (
        <div style={{ overflowY: 'none', display: 'flex' }}>
            <Dialog
                open={props.state}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Booking Details"}
                    <CancelOutlinedIcon onClick={handleClose} style={{ marginLeft: '65%', marginTop: '1%' }} />
                </DialogTitle>
                <DialogContent>
                <Information Close={handleClose} userdata={props.userData}  />
                </DialogContent>
            </Dialog>
        </div>
    );
}