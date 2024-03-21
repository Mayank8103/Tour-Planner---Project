import { Avatar,TextField,Button, Grid,FormControlLabel,Checkbox,Link,
    Paper,Box,Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { postData } from "../services/ServerServices";
import { useNavigate } from "react-router-dom";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/home">
         Tour-Planner
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();
//  ****** for Navigate *******





export default function Admin(){
  
  const [emailaddress , setEmailAddress]= useState('')
  const [password , setPassword] = useState('')
  var navigate = useNavigate()
  
  const handleSubmit = async () => {
    var body={
            'emailaddress': emailaddress,
            'password': password
        }
         var result = await postData ('adminlogin/checkpassword',body)
         console.log("ADMIN",JSON.stringify(result.data))

        if(result.status == true){
          localStorage.setItem("ADMIN",JSON.stringify(result.data))
          navigate("/Dashboard",)
        }
        else{
          // alert("invalid Email/Mobile Number or Password")
          alert(result.message)
        }

      };
        
    return(
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              
              backgroundImage: 'url("http://source.unsplash.com/1500x1500/?tour, places")',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <img src="/assets/logo1.png" width="55"  />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box  sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(event)=> setEmailAddress(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event)=> setPassword(event.target.value)}
                />
               
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  
    )
}