import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import proposalRoute from './routes/proposal.route.js'
import leagueRoute from './routes/league.route.js'
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import paymentRoute  from "./routes/payment.route.js";
const app = express()
dotenv.config();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin:"http://34.131.71.8/",credentials:true}));
app.use(cors({origin: 'https://splendid-manatee-4b591b.netlify.app', credentials: true}));


// Set the Access-Control-Allow-Origin header to allow cross-origin requests from any domain
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   next();
// });

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log(error);
    }
}

// app.use("/",userRoute)
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/gigs",gigRoute)
app.use("/api/proposal",proposalRoute)
app.use("/api/league",leagueRoute)
app.use("/api/payment",paymentRoute)
app.get("/server/check",(req,res)=>{
    res.send("Server working")
})
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).send(errorMessage);
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    connect();
    console.log("Server is running")
})
