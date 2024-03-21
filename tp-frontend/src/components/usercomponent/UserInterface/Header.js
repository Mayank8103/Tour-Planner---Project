import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useStyles } from './HeaderCSS';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Navigate, useNavigate } from 'react-router-dom';
import BookingDetails from './BookingDetail';
import { useState } from 'react';
import { CardGiftcard } from '@mui/icons-material';


export default function Header() {
    const [state,setstate]=useState(false)

    var navigate= useNavigate()
    const handleNavigate=()=>{
        navigate('/login')
    }
    const handleBooking= ()=>{
        setstate(true)

    }
    
    var classes = useStyles()
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#0a2950' }} >
                <div style={{height:'0px'}}>
                    <img src='/assets/Tour Planner-1 (2).png' style={{ width: '263px', height: '225px',marginTop:'-98px' }} />
                    </div>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <h3 className={classes.bounce}>  </h3>
                        </Typography>
                        <CardGiftcardIcon />
            <span style={{ marginLeft: 5, fontFamily: 'Poppins', fontWeight: 400, fontSize: 16 }}>
              Gift an Experience
            </span>
                        {/* <Button color="inherit">Home</Button>
                        <Button color="inherit">Packages</Button>
                        <Button color="inherit">Gallery</Button>
                        <Button color="inherit" onClick={handleBooking}>Book</Button>
                        <Button color="inherit" onClick={handleNavigate}>Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <main>
                <div style={{overflow:'hidden'}}>
                    <img src='/assets/gangtok-lake.jpg' style={{ width: '100%', height: '100vh' }} />
                    <div style={{
                        display: 'flex',
                        flexDirection:'column',
                        position: 'absolute',
                        justifyContent: 'center',
                        zindex: 1, top: '15%',
                        width: '100%',
                        height: '85vh',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: 'white',
                        marginBottom:'10%'
                    }}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                        <div><h3 style={{fontSize: '35px', fontWeight: '500', letterSpacing: '3px', textShadow: '1px 1px 2px black' }}>Welcome To<span style={{color:'#00b894'}}> INDIA</span></h3></div>
                        <div><h1 style={{
                            margin: '5px 0 5px 0',
                            fontSize: '55px',
                            fontWeight: '700',
                            textShadow: '2px 1px 5px black'
                        }}>
                            Let's Go...<span class="change_content"> </span></h1></div>
                            <div style={{color:'#00b894',margin: '5px 0 5px 0',
                            fontSize: '55px',
                            fontWeight: '700',
                            textShadow: '2px 1px 5px black'}}><i>Keep Calm And Travel On</i></div>
                        <div><p style={{ fontSize: '25px', wordSpacing: '2px', marginBottom: '25px', textShadow: '1px 1px 1px black' }}>"Travel makes one modest....."</p></div>
                        <div><a style={{
                            padding: '12px 30px',
                            borderRadius: '4px',
                            outline: 'none',
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            letterSpacing: '1px',
                            transition: 'all .5s ease',
                            background: '#fff',color: '#000',
                            variant:'contained'
                        }} href="#" class="btnone">Learn more</a>
                        {/* </div><a style={{padding: '12px 30px',
                            borderRadius: '4px',
                            outline: 'none',
                            textTransform: 'uppercase',
                            fontSize: '13px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            letterSpacing: '1px',
                            transition: 'all .5s ease',
                            cursor:'pointer',
                            background: '#00b894',color: 'white', marginLeft:'5px'}} class="btntwo">sign up here</a> */}
                            </div>
                            </div>
                    </div>
                </div>
            </main>
            <BookingDetails state={state} setState={setstate} />
        </>
    );
}