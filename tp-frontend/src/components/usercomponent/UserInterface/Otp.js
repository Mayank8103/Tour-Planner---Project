
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { postData } from '../../services/ServerServices';
import BookingDetails from './BookingDetail';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Otp(props) {
    
    const [state,setState]=useState(false)
    const [open, setOpen] = useState(props.state);
    const [newOtp, setNewOtp] = useState('')
    const [userData, setUserdata] = useState({ userid: '', mobilenumber: '', name: '' })

    const handleDialog = async () => {
        if (props.otp == newOtp) {
            var result = await postData("userInterface/add_new_user", 
            { name: props.name, mobilenumber: props.number })
            if (result.status == 0) {
                alert("SERVER ERROR")
            }
            else {
                if (result.status == 2) {
                    // console.log("..", result.data)
                    setUserdata({ userid: result.data[0].userid, mobilenumber: props.number, name: props.name })
                    props.setOpen(false)
                    alert("login Successfully")
                    props.pageRefresh()
                    setState(true)
                    setOpen(false)
                }
                else {
                    alert("Mobile Exist Already")
                    setOpen(false)
                }
                setState(true)
                props.setOpen(false)
                
            }
        }
        else {
            alert("Incorrect")
        }
    };

    const handleClose = () => {
        setOpen(false);
        props.setOpen(false)
        props.pageRefresh()
    };


    return (
        <div>

            <Dialog
                style={{ backdropFilter: "blur(3px)" }}
                PaperProps={{
                    sx: {
                        borderRadius: 8,
                        backgroundColor: "#fff",
                        //   backgroundImage: "linear-gradient(45deg, #FBDA61 0%, #e46161 100%)"
                    }
                }}
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogContent>
                    <div>
                        <div style={{ display: 'flex', fontFamily: 'Poppins', fontSize: 18, flexDirection: 'row' }}>
                            {/* <b>  {"Welcome to Tour Planner"}</b> */}
                            <ArrowBackIcon onClick={handleClose} style={{ marginLeft: '5%', marginRight: '5%' }} />
                            <span style={{ display: 'flex', justifyContent: 'center', color: '#c92532', fontSize: 22 }}>Welcome {props.name}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <h3>OTP has been sent to +91 {props.number}</h3>
                        </div>
                        <div style={{ margin: '10%', display: 'flex', justifyContent: 'center' }}>
                            <MuiOtpInput length={6} value={newOtp} onChange={(newValue) => setNewOtp(newValue)} />
                        </div>
                        {newOtp.length == 6 ? <>
                            <div style={{
                                width: 50,
                                height: 50,
                                display: 'flex',
                                justifyContent: 'center',
                                background: '#c92532',
                                borderRadius: 25,
                                marginLeft: '45%'
                            }}>
                                <ArrowForwardIcon color='inherit'
                                    style={{
                                        fontSize: 34,
                                        marginTop: 10,
                                        cursor: 'pointer'

                                    }}
                                    onClick={handleDialog} />
                            </div></> : <></>}
                    </div>
                </DialogContent>
            </Dialog>
            <BookingDetails state={state} setState={setState} userData={userData} setUserdata={setUserdata} />
           
        </div>
    );
}