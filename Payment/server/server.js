import {app} from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";
export const instance=new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    secret: process.env.RAZORPAY_API_SECRET,
})

app.listen(process.env.PORT, ()=>
console.log(`Server is working on ${process.env.PORT}`)
);

