import express from "express"
import dotenv from "dotenv"
const app = express();
import mongoose from "mongoose"
const URI="mongodb://127.0.0.1:27017/bookStore";
import bookRoute from "../backend/route/book.route.js"
import userRoute from "../backend/route/user.route.js"
import cors from "cors"
app.use(cors())
app.use(express.json())



dotenv.config();
const port=process.env.PORT||3001;

mongoose.connect(URI,{
  useNewUrlParser: true, // Recommended options for connection
  useUnifiedTopology: true,
}).then(()=>{
  console.log("db is connected")
}).catch(()=>{
  console.log("error")
})

app.use("/book",bookRoute)
app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`server is  listening on port ${port}`)
})