import { useEffect,useState } from "react";
import { useStyles } from "./DisplayAllPackagesCss";
import MaterialTable from "@material-table/core";
import { ServerURL, getData, postData } from "../services/ServerServices";
import { render } from "@testing-library/react";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Avatar,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,
  Button, TextField, Grid, IconButton, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';


export default function DisplayAllStates(props)
{
    var classes = useStyles()

    const [stateName, setStateName] = useState('') 
    const [image, setImage] = useState('')
    const [stateid, setStateId] = useState('')

    const [open,setOpen] = useState(false)

    const showStateDetails =()=>{
        return (
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" style={{display:'flex', justifyContent:'space-between'}}>
                  <div style={{display:'flex', alignItems:'center'}}>
                  <img src="/assets/heading5.png" width="40" style={{margin:'0 5px 0 0'}} />
                    Edit State
                  </div>
                  <div>
                    <CloseIcon onClick={handleClose} style={{cursor:'pointer'}}/>
                  </div>
                </DialogTitle>
                <DialogContent>
                <Grid container spacing={2} style={{marginTop:5}}>
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
                            <input hidden accept="image/*" type="file" />
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
        
                </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleEditData}>Edit</Button>
                  <Button onClick={handleClose} autoFocus>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }

    const [states,setStates] = useState([])
    const fetchAllAddedStates = async()=>{
        var result = await getData('states/fetch_all_added_states')
        setStates(result.data)
    }

    useEffect (function(){
        fetchAllAddedStates()
    },[])

    const handleOpenDialog = (rowData)=>{
        setStateName(rowData.sid)
        setStateId(rowData.sid)
        setImage({fileName:`${ServerURL}/images/${rowData.images}`,bytes:""})
        setOpen(true)
    }

    const handleClose =()=>{
        setOpen(false)
    }

    const handleEditData =async()=>{
        var body = {
        'statename':stateName
      }
      var result=await postData('packages/edit_state_data',body)
      if(result.status)
    { 
      setOpen(false)
      Swal.fire({
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
    fetchAllAddedStates()
}


    function showAllStates(){

    return(
        <MaterialTable
            title={<span className={classes.headingStyle}><u><b>State List</b></u></span>}
            columns={[
              { title: 'State', field: 'statename' },
              { title: 'Images',
            render:rowData => <Avatar src={`${ServerURL}/images/${rowData.images}`} style={{width:70, height:70}} variant="rounded"/>}
            ]}
            data={states}
               
            actions={[
              { icon: 'add',
              isFreeAction:true,
              tooltip:'Add Package',
              //onClick: (event) => navigate('/packages')
              },
              {
                icon: 'edit',
                tooltip: 'Edit User',
                onClick: (event, rowData) => handleOpenDialog(rowData)
              },
              {
                icon: 'delete',
                tooltip: 'Delete User',
                //onClick: (event, rowData) => handleDelete(rowData)
              }
            ]}
          />
    )
        }
    return(<div className={classes.mainContainer}>
        <div className={classes.box}>
          {showAllStates()}
          {showStateDetails()}
          </div>
      </div>)

}
