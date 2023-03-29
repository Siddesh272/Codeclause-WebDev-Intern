import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";

const Home = () => {

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")
        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "CodeClause",
            description: "RazorPay Test Payment",
            image: "https://media.licdn.com/dms/image/D4D03AQHebQ0bmrgLYQ/profile-displayphoto-shrink_400_400/0/1669354660160?e=1685577600&v=beta&t=nxZubzhIihGa1M-QPnKvlNs9FAi0wZGBP0tfp0P5VLM",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Siddesh  Mishra",
                email: "mishrasiddesh@gmail.com",
                contact: "9899349919"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121272"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>
            <Box bg='#121272' w='100%' p={4} color='white'>
                Payment Gateway
            </Box>
            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>
                <Card amount={300}  img={"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41Yg6yJxdeL._AC_UL240_SR240,220_.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={700}  img={"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61K9nviaSlL._UL1001_.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={500}  img={"https://contents.mediadecathlon.com/p1484240/ab565f3675dbdd7e3c486175e2c16583/p1484240.jpg"} checkoutHandler={checkoutHandler} />
            </Stack>
        </Box>
    )
}

export default Home