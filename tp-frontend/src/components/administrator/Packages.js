import React, { useState,useEffect } from "react";
import { Button, TextField, Grid, IconButton, Avatar, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useStyles } from "./PackagesCss";
import { getData } from "../services/ServerServices";
import { postData } from "../services/ServerServices";
import Swal from "sweetalert2";

export default function Packages(props) {
    const [state, setState] = useState('')
    const [packageName, setPackageName] = useState('')
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [states, setStates]=useState([])

    const [packageLogo, setPackageLogo] = useState({ fileName: '/assets/watermark.jpg', bytes: '' })
    
    var classes = useStyles()
    const fetchAllStates=async()=>{
        var result = await getData('statecity/fetch_all_states')
        setStates(result.data)
        // alert(JSON.stringify(result.data))
    }
    useEffect (function(){
        fetchAllStates()
    },[])

    const fillStates = () => {
        return states.map((item) => {
            return(<MenuItem value={item.sid}>{item.statename}</MenuItem>)
        })
    }

    const handleStateChange = (event) => 
    {
        setState(event.target.value)
    }
    const handleImage = (event) => {
        setPackageLogo({
            fileName: URL.createObjectURL(event.target.files[0]), bytes:
                event.target.files[0]
        })
    }

    const clearValue = () =>{
        setState('state')
        setPackageName('')
        setDuration('')
        setDescription('')
        setPrice('')
        setPackageLogo({fileName:'/assets/watermark.jpg',bytes:''})
    }

   const handleClick=async()=>{
    var formData = new FormData()
    formData.append('packagename',packageName)
    formData.append('state',state)
    formData.append('duration',duration)
    formData.append('description',description)
    formData.append('price',price)
    formData.append('logo',packageLogo.bytes)

    // console.log(formData)

    var result=await postData('packages/add_new_packages',formData)
    if(result.status)
    { Swal.fire({
        icon: 'success',
        title: result.message,
      })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: result.message,
          })
    }
    clearValue()
   }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <div><img src="/assets/heading5.png" width="40" /></div>
                        <div className={classes.headingStyle}>
                            Add Packages
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state}
                                label="State"
                            onChange={handleStateChange}
                            >
                                <MenuItem value={state}>Choose State</MenuItem>
                                {fillStates()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth value={packageName} onChange={(event) => setPackageName(event.target.value)} label="Package Name" varient="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth value={duration} onChange={(event) => setDuration(event.target.value)} label="Duration" varient="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth value={description} onChange={(event) => setDescription(event.target.value)} label="Description" varient="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth value={price} onChange={(event) => setPrice(event.target.value)} label="Price" 
                            varient="outlined" />
                    </Grid>
                    <Grid item xs={6} className={classes.rowStyle}>
                        <IconButton  fullWidth color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleImage} />
                            <PhotoCamera />
                        </IconButton>

                        <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            value={packageLogo}
                            src={packageLogo.fileName}
                            sx={{ width: 56, height: 56 }}
                        />

                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth onClick={handleClick} variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button fullWidth variant="contained" onClick={clearValue}>Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}