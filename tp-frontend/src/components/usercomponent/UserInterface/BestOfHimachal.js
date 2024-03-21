import { Divider, Paper, colors } from "@mui/material";
import React,{createRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from "@mui/material";

import { useStyles } from "./BestOfIndiaCSS";
import { ServerURL } from "../../services/ServerServices";

 
 export default function BestIndia(){
    var classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
 


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: matches?2:4,
        slidesToScroll:matches?2:1,
        autoplay:false,
        autoplaySpeed:4000,
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
      };
      var slider=createRef()
      var images=[
    {
        id:2,
        image:"himachal.jpg",
        text:"Himachal",
       
    },
    {
        id:3,
        image:"kashmir.jpg",
        text:"Kashmir",
       
    },
    {
        id:4,
        image:"kerala.jpg",
        text:"Kerala",
        
    },
    {
        id:5,
        image:"laddakh.jpg",
        text:"Laddakh",
        
    },
    {
        id:6,
        image:"northeast.jpg",
        text:"North East",
       
    },
    {
        id:7,
        image:"rajsthan.jpg",
        text:"Rajsthan",
        
    },
    {
        id:8,
        image:"sikkim.jpg",
        text:"Sikkim",
       
    },
    {
        id:9,
        image:"spiti.jpg",
        text:"Spiti",
    
    },
    {
        id:10,
        image:"uttarakhand.jpg",
        text:"Uttarakhand",
        
    }        
      ]        
      

      function handleLeftClick(){
        slider.current.slickPrev()
      }
      function handleRightClick(){
        slider.current.slickNext()
      }

function PlayImages(){
    return images.map((item)=>{
        return(
          
          <div>   
          <div style={{borderRadius:10,flexDirection:'column',
               alignItems:'center',     
             width:'80%',margin:'5%',
              height:400,
            //  background:'linear-gradient(#0A4D68,#088395,#05BFDB)',
             display:'flex',
             alignSelf:'center'}}>
          <div style={{width:'100%', display:'flex',
                        marginTop:10
                        }}>
          <img src={`${ServerURL}/images/${item.image}`} 
           className={classes.images}
          style={{width:'100%',height:380,borderRadius:20 }} />
   
          </div>
          <div
                    style={{
                      fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: 24,marginTop:'50%',
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: '#680747',
                                marginTop:25, display:'flex',
                                alignItems:'center',
                                position:'absolute',
                                 zIndex:1,bottom:'7%',color:'#fff'
                    }}
                  >
                    {item.text}
                   

                  </div>
         
        </div>
       </div>
        )
    })
}

    return(
   
        <div style={{  height:'100%',
               width:'100%',
               display:'flex',
               alignItems:'center',
               justifyContent:'center'}}>

       <div style={{position:'relative', width:'85%'}}>

       {matches?<></>:
       <div 
       style={{
        background:'grey',
        color:"white",
        width:45,height:45,
        borderRadius:22,
        display:'flex',
        alignItems:'center',
        position:'absolute',
        zIndex:1,
        left:'-3%',
        top:'55%',
        opacity:0.6}}>
        <NavigateBeforeIcon onClick={handleLeftClick} style={{fontSize:40}}/>
        </div>}<div style={{fontFamily:'poppins',
                            fontSize:40,fontWeight:700,
                            display:'flex',
                            justifyContent:'center',
                            letterSpacing:1
                            }}>
            Best Of Himachal
            </div>
        <Divider style={{width:60, 
                        
                         marginBottom:'3%',
                         height:1, 
                         display:'flex',alignSelf:'center',marginLeft:'46%',
                         background:'red'}} />
         <Slider ref={slider} {...settings} >
            {PlayImages()}
            </Slider>
           {matches?<></>:
           <div 
           style={{background:'grey',
                   color:"white",
                   width:45,
                   height:45,
                   borderRadius:22,
                   display:'flex',
                   alignItems:'center',
                   position:'absolute',
                   zIndex:1,right:'-1%',
                   top:'55%',opacity:0.6}}>
            <NavigateNextIcon onClick={handleRightClick} style={{fontSize:40}}/>
       </div>}
       
       </div>
    </div>
    )
 }
