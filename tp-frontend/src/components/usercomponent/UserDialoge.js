import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import LoginDialoge from './UserInterface/LoginDialoge';
export default function UserDialoge(props) {
    // console.log("ADD",props)
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
                    {"User LogIn"}
                    <CancelOutlinedIcon onClick={handleClose} style={{ marginLeft: '50%', marginTop: '1%' }} />
                </DialogTitle>
                <DialogContent>
                <LoginDialoge close={props.state} setClose={props.setState} state={props.state} setState={props.setState}  />
                </DialogContent>
            </Dialog>
        </div>
    );
}