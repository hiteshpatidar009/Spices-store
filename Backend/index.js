import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import spicesRoute from "./route/spices.router.js";
import userRoute from "./route/user.route.js";
const app  = express();

app.use(cors());
app.use(express.json());


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connect to mongodb
try {
   mongoose.connect(URI,{
    useNewUrlParser: true ,
    useUnifiedTopology: true  
   });
   console.log ("Connect to mongoDB");
} catch (error) {

  console.log ("error:", error);

}

// defind routes
app.use("/spices",spicesRoute );
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is  listening on port ${PORT}`);
})