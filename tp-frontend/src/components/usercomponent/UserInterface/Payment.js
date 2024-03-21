import { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Payment(){
    
    var location = useLocation()
    // console.log(location)
console.log("Payment",location)
    const Razorpay = useRazorpay();

    const handlePayment = useCallback(async () => {


        const options = {
            key: "rzp_test_GQ6XaPC6gMPNwH",
            amount:  15000 * 100,
            currency: "INR",
            name: "Tour Planner",
            description: "Test Transaction",
            image: `/assets/logo1.png`,

            handler: (res) => {
                console.log(res);
            //     if (res.razorpay_payment_id == undefined) {
            //         orderdetails("None", "None", "None")
            //     }
            //     else {
            //         orderdetails("Online", "pending", "Successful")
            //     }
              },
            prefill: {
                name: "Mayank",
        
                contact: "8103991441",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#0a2950",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
    }, [Razorpay]);

    return (
        <div className="App">
            {/* {Top()} */}
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '5%' }}>
                {/* <img src="/assets/Make-a-Payment.png" /> */}
                <div style={{ marginTop: 40 }} onClick={handlePayment}>
                    <img src="/assets/payment process.gif" style={{}} /></div>
                <div style={{ width: '30%', }}>
                    <Button fullWidth
                        sx={{
                            height: 50,
                            marginTop: 5,
                            background: '#dc2f2f',
                            color: '#fff',
                            "&: hover": {
                                background: '#f76b8a',
                                color: '#000'
                            }

                        }} onClick={handlePayment}>Click Here</Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}