import * as React from 'react';
import { AppBar, Divider, Grid, Paper } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportIcon from '@mui/icons-material/Report';
import CategoryIcon from '@mui/icons-material/Category';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ListItemButton from '@mui/material/ListItemButton';
import {Routes, Route} from 'react-router-dom';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import DisplayAllPackages from './DisplayAllPackages';
import Packages from './Packages';
import NewStates from './NewStates';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';

export default function DashBoard(props) {

    var navigate=useNavigate()

    return (<div>
        <AppBar position="static" style={{background:'#0a2950'}} >
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Tour Planner
                </Typography>
            </Toolbar>
        </AppBar>

        <Grid container spacing={2}>
            <Grid item xs={2}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img src='/assets/Tour Planner-1 (1).png' style={{ width: 150, margin: 20 }} />
            <Paper style={{ width: 230, height: 60, background: '#dfe6e9', margin: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} elevation={2}>
                <img src='/assets/admin_icon.png' style={{ width: 50, borderRadius: 25, marginLeft: 10 }} />
                <span style={{ fontWeight: 'bold', fontFamily: 'Poppins', marginRight: 30 }}>Mayank Singh</span>
            </Paper>

            {/* List */}

            <div style={{width:220, margin:20}}>
                <List component="nav" >
                    <ListItemButton
                        onClick={() => navigate("/dashboard/displayallpackages")}
                    >
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontFamily:'Poppins', fontWeight:550, letterSpacing:1}}>Packages</span>} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={() => navigate("/dashboard/packages")}
                    >
                        <ListItemIcon>
                            <NoteAddIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontFamily:'Poppins', fontWeight:550, letterSpacing:1}}>Add Packages</span>} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={() => navigate("/dashboard/newstates")}
                    >
                        <ListItemIcon>
                            <BookmarkAddIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontFamily:'Poppins', fontWeight:550, letterSpacing:1}}>Add States</span>} />
                    </ListItemButton>

                    <ListItemButton
                        //onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <ReportIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontFamily:'Poppins', fontWeight:550, letterSpacing:1}}>Reports</span>} />
                    </ListItemButton>
                    <Divider/>

                    <ListItemButton
                        //onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={<span style={{fontFamily:'Poppins', fontWeight:550, letterSpacing:1}}>Logout</span>} />
                    </ListItemButton>
                </List>
            </div>
        </div>
        </Grid>
        <Grid item xs={9}>
            <Routes>
            <Route element={<DisplayAllPackages/>} path={"/displayallpackages"} />
            <Route element={<Packages/>} path={"packages"} />
            <Route element={<NewStates/>} path={"newstates"} />
            </Routes>
        </Grid>
        </Grid>
    </div>)
}