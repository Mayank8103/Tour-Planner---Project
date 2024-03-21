import { Divider, Grid } from "@mui/material";
import { useStyles } from "./BestOfIndiaCSS";



export default function BestOfIndia() {

    var classes = useStyles()

    return (
        <>
            <Grid container>
               
                <div style={{
                    width: '80%',
                    margin: '5% 5% 3% 8%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: 38,
                    letterSpacing: 2,
                }}>
                    <div style={{ width:'30%',
                                  marginTop:'10%', 
                                  display: 'flex',
                                  flexDirection:"column", 
                                  alignContent: 'center' }}>
                        <div >
                            Find the Perfect Escape
                           <Divider style={{width:70, 
                                            marginTop:'3%',
                                            marginBottom:'3%',
                                            height:2, 
                                            background:'red'}} />
                        </div>
                        <div style={{
                            fontWeight: 400,
                            fontSize: 20,
                            color:'#ccc'
                        }}>
                            Discover your ideal Experience
                        </div>
                    </div>
                   
                    <div >
                        <img src="/assets/meghalaya.jpeg" alt="india" 
                         className={classes.images} />
                    </div>
                    <div>
                        <img src="/assets/mumbai.webp" alt="india"  
                        className={classes.images} />
                    </div>
                    <div>
                        <img src="/assets/himalaya.png" alt="india"  
                          className={classes.images} />
                    </div>
                    </div>
               

            </Grid>
        </>
    )
}