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

 
 export default function MainSlider(){
    var classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
 


    var settings = {
        dots: true,
        infinite: true,
        // speed: 2000,
        slidesToShow: matches?2:1,
        slidesToScroll:matches?2:1,
        autoplay:true,
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
      var images=[{
        id:1,
        image:"kasol.webp",
        text:"Kasol",
       
    },
    {
        id:2,
        image:"laddakh2.webp",
        text:"Himachal",
       
    },
    {
        id:3,
        image:"manali.webp",
        text:"Kashmir",
       
    },
    {
        id:4,
        image:"taj.avif",
        text:"Kerala",
        
    },
    {
        id:5,
        image:"khajurao.avif",
        text:"Laddakh",
        
    },
            
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
             width:'90%',
              height:400,marginLeft:'5%',
            //  background:'linear-gradient(#0A4D68,#088395,#05BFDB)',
             display:'flex',
             alignSelf:'center'}}>
          <div style={{width:'100%', display:'flex',
                        marginTop:10
                        }}>
          <img src={`${ServerURL}/images/${item.image}`} 
           
          style={{width:'100%',height:400,borderRadius:5 }} />
   
          </div>
          {/* <div
                    style={{
                      fontFamily: 'Poppins',
                                fontWeight: 800,
                                fontSize: 40,marginTop:'50%',
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                                
                                marginTop:25, display:'flex',
                                alignItems:'center',
                                position:'absolute',
                                 zIndex:1,bottom:'25%', color:'#000'
                    }}
                  >
                    {item.text}
                   

                  </div> */}
         
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

       <div style={{position:'relative', width:'95%', marginBottom:'5%', marginTop:'5%'}}>

    
         <Slider ref={slider} {...settings} >
            {PlayImages()}
            </Slider>
          
       
       </div>
    </div>
    )
 }
