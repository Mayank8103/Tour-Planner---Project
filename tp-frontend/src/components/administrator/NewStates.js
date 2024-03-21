import React, { useState,useEffect } from "react";
import { Button, TextField, Grid, IconButton, Avatar, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { getData } from "../services/ServerServices";
import { postData } from "../services/ServerServices";
import Swal from "sweetalert2";
import { useStyles } from "./PackagesCss";

export default function NewStates(props){
    var classes = useStyles()
    const [stateName, setStateName] = useState('') 
    const [image, setImage] = useState('')

   

    const clearValue = () =>{
        setStateName('')
        setImage('')
    }

    const handleImage = (event) => {
        setImage({
            fileName: URL.createObjectURL(event.target.files[0]), bytes:
                event.target.files[0]
        })
    }

    const handleClick = async()=>{
        var formData = new FormData()
        formData.append('statename',stateName)
        formData.append('image',image.bytes)
    

    var result=await postData('statecity/add_new_state',formData)
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

    return(
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <div><img src="/assets/heading5.png" width="40" /></div>
                        <div className={classes.headingStyle}>
                            Add State
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField fullWidth value={stateName} onChange={(event)=>setStateName(event.target.value)}  label="State Name" varient="outlined" />
                    </Grid>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <IconButton  fullWidth color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleImage} />
                            <PhotoCamera />
                        </IconButton>

                        <Avatar
                            alt="Remy Sharp"
                            variant="rounded"
                            value={image}
                            src={image.fileName}
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