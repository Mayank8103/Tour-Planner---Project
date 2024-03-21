import * as React from 'react';
import { Button, Paper } from "@mui/material";
import { useStyles } from "./LoginFormCSS";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Otp from './Otp';



export default function LoginDialoge(props) {


    const [number, setNumber] = useState('')
    const [otpDialoge, setOtpDialoge] = useState(false)
    const [otp, setOtp] = useState('')
    const [name, setName] = useState('')
    const [refresh, setRefresh] = useState(false)

    const pageRefresh = () => {
        setRefresh(!refresh)
    }


    const handleClick = () => {
        setOtpDialoge(true);
        generateOTP()
        // props.setClose(false)
        pageRefresh()
       
    };

    const generateOTP = () => {
        var gotp = parseInt(Math.random() * 899999) + 100000
        console.log("OTP:", gotp)
        setOtp(gotp)
        pageRefresh()
    }


    var navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }



    function breadcrump() {
        return (
            <div role="presentation" style={{color:'#487eb0'}}>
                <Breadcrumbs aria-label="breadcrumb">

                    <Link
                        underline="hover"
                        color="inherit"
                        href="/home"
                    >
                        HOME
                    </Link>
                    <Typography color="text.primary">Account</Typography>
                </Breadcrumbs>
            </div>)
    }

    var classes = useStyles()
    return (
        <div>
            <div style={{display:'flex', flexDirection:'column'}}>

                <input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)}
                    className={classes.inputbox}
                />
                <input type='text' placeholder='mobile Number' value={number} onChange={(event) => setNumber(event.target.value)}
                    className={classes.passbox}
                />
                <Button onClick={handleClick}
                    disabled={number.length !== 10}
                    variant="contained"
                    style={{
                        width: '334px',
                        marginTop: 20,
                        background: '#c92532',
                        height: 50,
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: 16,
                    }}
                >Sign In</Button>
            </div>



            <Otp pageRefresh={pageRefresh}  number={number} open={otpDialoge} setOpen={setOtpDialoge} otp={otp} name={name} />
        </div>
    )
}