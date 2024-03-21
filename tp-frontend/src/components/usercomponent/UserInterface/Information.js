import Checkbox from '@mui/material/Checkbox';
import { Badge, Button, Grid, TextField } from "@mui/material"
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { getData, postData } from '../../services/ServerServices';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';

export default function Information(props) {
     console.log("Info",props)
    // var user = useSelector((state) => state.user)
    // console.log("USER:", user)
    // var userData= Object.values(user)
    // console.log("Values;", userData)

     function traveldate(){
        return(
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker value={dateoftravel} onChange={(newValue) => setdateoftravel(newValue)} />
            </DemoContainer>
          </LocalizationProvider>
        )
     }

    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

    const [emailAddress, setEmailAddress] = useState('')
    const [mobilenumber, setMobileNumber] = useState('')
    const [firstName, setFirstName] = useState('')
    const [travellerCount, setTravellerCount] = useState('')
    const [dateoftravel, setdateoftravel] = useState('')
    const [address, setAddress] = useState('')
   

  var navigate =useNavigate()
    
    const handleClick = async () => {

        var body = {
            "address": address,
            "fullname": firstName,
            "mobilenumber": mobilenumber,
            "emailaddress": emailAddress,
            "dateoftravel":dateoftravel,
            "travelcount":travellerCount
        }
        var result = await postData('booking/new_booking', body)
        if (result.status) {
            alert(result.message)
            // dispatch({ type: 'ADD_USER', payload: [body.mobile_number,[body]] })
            props.Close()
            navigate('/payment',{state: {userdata:props.userdata}})
        
        }
        else {
            alert("Fail to submit Address")
            props.Close()
        }
    }


    return (
        <div>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column', marginTop: '1%',
                        marginBottom: '10%',
                        fontFamily: 'Poppins', fontSize: 14, fontWeight: 500,
                    }} >

                        <div>
                            <Box sx={{ width: 450, marginTop: 2 }}>
                                
                            </Box>
                        </div>
                        <div style={{ marginTop: 8 }}>
                            <TextField required variant='outlined' value={firstName}    onChange={(event)=>setFirstName(event.target.value)} placeholder="Full name" style={{ width: '100%', height: 10 }} />
                            {/* <TextField required variant='outlined' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="last name" style={{ width: '50%', height: 10, marginLeft: '2%' }} /> */}
                        </div>
                        <div style={{ marginTop: 50 }}>
                            <TextField required variant='outlined' value={emailAddress} onChange={(event)=>setEmailAddress(event.target.value)} placeholder="Email Address" style={{ width: '50%', height: 10, marginRight: 6 }} />
                            <TextField required variant='outlined' value={mobilenumber} onChange={(event) => setMobileNumber(event.target.value)} placeholder="Mobile Number" style={{ width: '48%', height: 10 }} />

                        </div>
                        <div style={{display:'flex', flexDirection:'row',marginTop:42}}>
                  <div style={{ width: '48%', marginRight:12 }}>
                        {traveldate()}
                </div>
                <div style={{ width: '48%',}}>
                           
                            <TextField required variant='outlined' value={travellerCount} onChange={(event) => setTravellerCount(event.target.value)} placeholder="Traveller Count" style={{ width: '100%', height: 15,marginTop:10 }} />
                        </div>
                        </div>

                        <div style={{ marginTop: 15 }}>
                            <TextField variant='outlined' value={address} onChange={(event)=>setAddress(event.target.value)} placeholder='Address' style={{ width:'100%', height:10 }} />
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '70%', marginTop:'10%', marginLeft: 70 }}>
                                <Button
                                disabled={mobilenumber.length!==10}  variant='contained' onClick={handleClick}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        background: '#dc2f2f',
                                        alignItems: 'center',
                                        height: '9vh',
                                        fontFamily: 'Poppins',
                                        color: '#fff',
                                        fontSize: 16,
                                        borderRadius: 2,
                                        textTransform: 'capitalize',

                                        "&: hover": {
                                            backgroundColor: '#f83e4b',
                                            color: '#fff'
                                        }
                                    }}>
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}