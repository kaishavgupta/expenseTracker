import cors from "cors";
import express from "express"
import {authRouter} from "./routes/auth-Router.js"
import { connectDb } from "./utils/db.js"
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { transactinRoute } from "./routes/transaction-Router.js";
import cookieParser from "cookie-parser";


const app= express()

app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));

app.use(express.json())

app.use("/",authRouter)
app.use("/",transactinRoute)

app.use(errorMiddleware)

const PORT =3000

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
})
.catch(()=>{
    console.log("Something went wrong");
})