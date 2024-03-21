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


export default function DisplayAllPackages(props)
{
  var classes = useStyles()
  var navigate=useNavigate()
  const [packageId, setPackageId] = useState('')
  const [state, setState] = useState('')
  const [packageName, setPackageName] = useState('')
  const [duration, setDuration] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [states, setStates] = useState([])
  const [btnStatus,setBtnStatus] = useState(false)
  const [oldPicture,setOldPicture] = useState('')
  const [message,setMessage] = useState('')

  const [packageLogo, setPackageLogo] = useState({ fileName: '/assets/watermark.jpg', bytes: '' })

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
    setBtnStatus(true)
}
  const [open,setOpen] = useState(false)

  const handleOpenDialog = (rowData)=>{
    setPackageId(rowData.pid)
    setState(rowData.sid)
    setPackageName(rowData.packagename)
    setDuration(rowData.duration)
    setDescription(rowData.description)
    setPrice(rowData.price)
    setPackageLogo({fileName:`${ServerURL}/images/${rowData.logo}`,bytes:""})
    setOldPicture(rowData.logo)
    setOpen(true)
  }

  const handleClose =()=>{
    setOpen(false)
  }

  const handleEditData =async()=>{
    var body = {'state':state,
    'packageid':packageId,
    'packagename':packageName,
    'duration':duration,
    'description':description,
    'price':price
  }
    var result=await postData('packages/edit_package_data',body)
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
    fetchAllPackages()
  }


  const handleDelete = async(rowData)=>{
    

      setOpen(false)
      Swal.fire({
        title: 'Do you want to delete package?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          var res = await postData('packages/delete_package_data',{packageid:rowData.pid})

          if (res.status)
          {Swal.fire('Deleted!', '', 'successfully')
          fetchAllPackages()
        }
          else
          Swal.fire({
            icon: 'error',
            title: result.message,
          })
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
  
    fetchAllPackages()
  }

  const handleCancel = ()=>{
    setPackageLogo({fileName:`${ServerURL}/images/${oldPicture}`,bytes:""})
    setOldPicture('')
    setBtnStatus(false)
    setMessage('')
  }

  const handleSaveLogo =async()=>{
    var formData = new FormData()
    formData.append('packageid',packageId)
    formData.append('logo',packageLogo.bytes)
    var result = await postData('packages/edit_package_logo',formData)
    
    if(result.status)
    {
      setMessage(result.message)
    }
    else{
      setMessage(result.message)
    }
    fetchAllPackages()
    setBtnStatus(false)

  }


  const PictureButton = ()=>{
    return(<div>{btnStatus ?<div style={{display:'flex', padding:10}}>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleSaveLogo}>Save</Button>
      </div>:<div style={{fontSize:10, color:'green', fontWeight:'bold'}}>{message}</div>}
    </div>)
  }
  
  const showPackageDetails = ()=>{
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
              Edit Package
            </div>
            <div>
              <CloseIcon onClick={handleClose} style={{cursor:'pointer'}}/>
            </div>
          </DialogTitle>
          <DialogContent>
          <Grid container spacing={2} style={{marginTop:5}}>
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
                        <PictureButton/>

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

    const [packages,setPackages] = useState([])
    const fetchAllPackages = async()=>{
        var result = await getData('packages/fetch_all_packages')
        setPackages(result.data)
    }

    useEffect (function(){
        fetchAllPackages()
    },[])

    function showAllPackages() {
        return (
          <MaterialTable
            title={<span className={classes.headingStyle}><u><b>Package List</b></u></span>}
            columns={[
              { title: 'State', field: 'statename' },
              { title: 'Package Name', field: 'packagename' },
              { title: 'Duration', field: 'duration'},
              { title: 'Description', field: 'description'},
                // render:rowData => <div>{rowData.description}</div>}
              { title: 'Price', field: 'price'},
              { title: 'Logo',
            render:rowData => <Avatar src={`${ServerURL}/images/${rowData.logo}`} style={{width:70, height:70}} variant="rounded"/>}
            ]}
            data={packages}
               
            actions={[
              { icon: 'add',
              isFreeAction:true,
              tooltip:'Add Package',
              onClick: (event) => navigate('/packages')
              },
              {
                icon: 'edit',
                tooltip: 'Edit User',
                onClick: (event, rowData) => handleOpenDialog(rowData)
              },
              {
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => handleDelete(rowData)
              }
            ]}
          />
        )
      }
    return(<div className={classes.mainContainer}>
      <div className={classes.box}>
        {showAllPackages()}
        {showPackageDetails()}
        </div>
    </div>)
}