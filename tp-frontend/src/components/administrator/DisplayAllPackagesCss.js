import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    mainContainer:{
        display:'flex',
        // justifyContent:'center',
        alignItems:'center',
        background:'#dfe6e9',
        height:'100vh',
        width:'100vw'
    },
    box:{
        padding:10,
        margin:10,
        background:'#fff',
        width:'75%',
        height:'auto',
        borderRadius:10
    },
    headingStyle:{
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'poppins',
        letterSpacing:1,
        marginTop:'7px',
        marginLeft:'6px'
    },
    rowStyle:{
        display:'flex',
        flexDirection:'row'
    }
})