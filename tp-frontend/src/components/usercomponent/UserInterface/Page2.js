
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { ServerURL, postData } from '../../services/ServerServices';
import UserDialoge from '../UserDialoge';
import Footer from './Footer';

export default function Page2() {


  const [state, setState] = useState(false)
  var location = useLocation()
  // console.log("Page2", location)
  var navigate = useNavigate()
  const [stateId, setStateId] = useState(location.state.stateid)
  const [packages, setPackages] = useState([])
  const [price,setPrice] = useState('')
  

  const FetchStates = async () => {
    var result = await postData('userInterface/FetchAllPackages', { stateid: stateId })
    setPackages(result.data)
  }
  useEffect(function () {
    FetchStates()
  }, [])

  const handleBooking = () => {
    setState(true)
  }

  function Data() {
    return packages.map((item) => {
      return (<>

        <div style={{ display: 'flex', marginLeft: 50, justifyContent: 'center', marginTop: 50 }}>
          <Paper style={{ width: 800, height: 700, }}>
            <div style={{ fontFamily: 'Poppins', width: '60%', fontSize: 24, fontWeight: 800, margin: '3%', letterSpacing: 1 }}>
              {item.packagename} {item.description}
            </div>

            <img src={`${ServerURL}/images/${item.logo}`} style={{ width: '100%', height: 500, alignSelf: 'center' }} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
              <div style={{ fontFamily: 'Poppins', fontSize: 14, fontWeight: 700, }}>
                {item.duration}
              </div>
              <div style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 700, margin: 5 }}>
        
                &#8377; {item.price} Per adult
                
              </div>
              <div style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 500, margin: 5 }}>

              </div>
              <Button variant='contained' style={{ background: '#192a56', color: '#fff', marginLeft: 20 }} onClick={handleBooking} >Book now</Button>
            </div>
          </Paper>
        </div>
      </>

      )

    })
  }

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <>    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#0a2950' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color='error'
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div style={{ height: '0px' }}>
              <img src='/assets/Tour Planner-1 (2).png' style={{ width: '263px', height: '225px', marginTop: '-131px' }} />
            </div>
            </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'beige' }}>
            {/* Tour Planner.com */}
          </Typography>
          < div style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            fontFamily: 'Poppins',
            fontSize: 16,
            marginRight: 15
          }}>
            <CardGiftcardIcon />
            <span style={{ marginLeft: 5, fontFamily: 'Poppins', fontWeight: 400, fontSize: 16 }}>
              Gift an Experience
            </span>
          </div>
          <Button color="inherit" onClick={handleNavigate}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <img src={`${ServerURL}/images/${location.state.image}`} style={{ width: '100%', height: 400, alignSelf: 'center' }} />
      {Data()}
      <div style={{ width: 100 }}> </div>
      <Footer />
      <UserDialoge state={state} setState={setState} />
    </>

  );
}