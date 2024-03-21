import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@mui/material";
import { useStyles } from "./FooterCSS";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export default function Footer() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [msg,setMsg]=useState('')
    const handleName=()=>{
        setMsg("Created By Varsha Bhardwaj")
         
    }

    var classes = useStyles()

    return (
        <div>
            <div style={{
                width: '100%',
                height: matches_sm ? 250 : matches ? 300 : 250,
                background: '#0a2950',
                marginTop: 25,
                display: 'flex',
                flexDirection: !matches ? "row" : 'column'
            }}>

                {!matches ? <>
                    <div style={{ marginLeft: !matches ? 40 : '', padding: !matches ? 50 : '', color:'#fff' }}
                        className={classes.text}
                    >
                         Contact

                        <div className={classes.ship}> Bookings Enquiry</div>
                        <div className={classes.ship2}> Contact us</div>
                        <div className={classes.ship2}> Terms of Services</div>
                        <div className={classes.ship2}> Refund Policy</div>



                    </div>

                    <div className={classes.text}
                        style={{ padding: !matches ? 50 : '', fontSize: matches_sm ? 14 : 16 , color:'#fff' }}>

                        Policy & FAQs
                        <div className={classes.ship}> Blog</div>
                        <div className={classes.ship2}> Creators Hub</div>
                        <div className={classes.ship2}> Privacy Policy</div>
                        <div className={classes.ship2}> FAQs</div>
                        <div className={classes.ship2}> Verified Booking </div>


                    </div>
                </> :
                    <>
                    <div style={{width:'100%', background:'#f5f5f5'}}>
                        <Accordion style={{ background:'#f5f5f5'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                               
                            >
                                <Typography style={{ marginLeft: !matches ? 40 : '', padding: !matches ? 50 : '', width: '100%' }}
                                    className={classes.text}>Shipping & Contact</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className={classes.ship}> Booking & Payments</div>
                                    <div className={classes.ship2}> Contact us</div>
                                    <div className={classes.ship2}> Terms of Services</div>
                                    <div className={classes.ship2}> Refund Policy</div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{ background:'#f5f5f5'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography style={{ marginLeft: !matches ? 40 : '', padding: !matches ? 50 : '', width: '100%' }}
                                    className={classes.text}>Policy & FAQs</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <div className={classes.ship}> Blog</div>
                                    <div className={classes.ship2}> Creators Hub</div>
                                    <div className={classes.ship2}> Privacy Policy</div>
                                    <div className={classes.ship2}> FAQs</div>
                                    <div className={classes.ship2}> Track Order </div>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        </div>
                    </>}


                <div className={classes.text} 
                    style={{ padding: matches_sm ? 5: matches ? 5 : 50, width: !matches ? '50%' : '100%', fontSize: matches_sm ? 14 : 16 , 
                    margin:matches?10:0, color:'#fff' 
                    }}>
                     Stay in Touch 


                    <div className={classes.rightside} 
                        style={{ marginTop: matches_sm ? 15 : 5, marginLeft: matches_sm ? 10 : 35, marginRight: matches_sm ? 10 : 2, fontSize: matches_sm ? 14 : 16 }}
                    >
                        Ocassionally sent emails with meaningful cont<span onClick={handleName}>e</span>nt only
                    </div>
                    <div className={classes.ship2}>
                        <input type='text'
                            placeholder="Email Address"
                            className={classes.mailbox}
                            style={{ width: matches_sm ? 180 : matches ? 200 : 350, height: 40, fontSize: matches_sm ? 14 : 16, textAlign: 'start', marginLeft: matches_sm ? 15 : 30 }}
                        />
                        <div>
                            <Button 
                                style={{
                                    display: 'flex',
                                    background: '#000',
                                    width: !matches ? 120 : 100,
                                    height: 40,

                                    justifyContent: 'center',
                                    fontFamily: 'Poppins',
                                    color: '#fff',
                                    fontSize: !matches ? 14 : 12
                                }}>
                                Subscribe</Button></div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    background: '#0a2950',
                    justifyContent: 'center',
                    width: '100%',
                    height: 400,
                    flexDirection: 'column',

                }}>
                <div className={classes.bottom}>

                    <img src='/assets/tour_logo4.png'
                        style={{
                            width: matches_sm ? 200 : 250,
                            marginTop: matches_sm ? '40%' : '30%',
                            marginBottom: matches_sm ? '5%' : 0
                        }} />
                </div>

                <div className={classes.bottom}
                    style={{
                        fontSize: matches_sm ? 12 : 16, color:'#fff' 
                    }}
                >
                    908, Indra Nagar, Chouhan Pyau Thatipur Gwalior
                </div>
                <div className={classes.bottom}
                    style={{
                        fontSize: matches_sm ? 12 : 16,
                        marginLeft: matches_sm ? '5%' : '0%',
                        marginTop: matches_sm ? '2%' : '0%',
                    }}
                >
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignSelf: 'center',
                    
                    marginTop: 10,

                }}>
                    <FacebookIcon style={{ marginLeft: 5, color:'#fff' }} />
                    <InstagramIcon style={{ marginLeft: 20, color:'#fff'  }} />
                   
                </div>
                <div 
                style={{display:'flex',
                        justifyContent:"center",
                        marginTop:10,fontWeight:'bold'
                             
                             }}>
                                {msg} 
                                </div> 
                <div style={{
                    display: 'flex',
                    justifyContent: matches_sm ? 'center' : 'space-between',
                    marginTop: matches_sm ? 60 : 10,
                    paddingTop: '1%',
                    paddingBottom: '1%',
                    background: '#0a2950',
                    flexDirection: matches_sm ? 'column' : 'row'
                }}>
                    <div style={{
                        display: 'flex',
                        alignSelf: matches_sm ? 'center' : 'flex-start',
                        marginTop: matches_sm ? 2 : 80,
                        marginLeft: matches_sm ? 20 : 80,
                        color:'#fff' 

                    }}>

                        <CopyrightIcon onClick={handleName} style={{ display: 'flex', marginLeft: 5, marginRight: 5, }} />
                        2023 Tour Planner All Right Reserved
                      

                    </div>
                    <div onClick={handleName} style={{
                        display: 'flex',
                        alignSelf: 'flex-end',
                        marginTop: matches_sm ? 10 : 20,
                        marginRight: 80,
                        padding: '2%',
                        justifyContent: 'space-around',
                        color:'#fff' 
                    }}>
                        {/* <img src="/assets/discover.jpg" 
                    style={{width:matches_sm? 200 :'80%', height:matches_sm? 20: '20%',marginTop:matches_sm? 1:10 ,marginLeft:70}}
                    /> */}

                        <img src="/assets/mastercard.png"
                            style={{ width: 40, marginTop: matches_sm ? 18 : 16, height: 35, marginRight: 5 }}
                        />

                        <img src="/assets/gpay.png"
                            style={{ width: 45, marginTop: matches_sm ? 14 : 14, marginRight: 3 }}
                        />
                        <img src="/assets/amex.png"
                            style={{ width: 35, height: 30, marginTop: 20, marginLeft: 5, marginRight: 3 }}
                        />
                        <img src="/assets/visa.png"
                            style={{ width: 35, height: 20, marginLeft: 5, marginTop: 25 }}
                        />

                    </div>
                </div>
            </div>
        </div>


    )



}