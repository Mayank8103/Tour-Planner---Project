import Header from "../UserInterface/Header";
import BestofIndia from "../UserInterface/BestOfIndia";
import BestIndia from "../UserInterface/BestIndia"
import BestOfHimachal from "../UserInterface/BestOfHimachal"
import Footer from "../UserInterface/Footer";
import MainSlider from "../UserInterface/MainSlider";

export default function Home(){
    return(
        <>
        <Header/>
        <BestofIndia/>
        <BestIndia/>
        <MainSlider/>
        <BestOfHimachal/>
        <Footer/>
        </>
    )

}