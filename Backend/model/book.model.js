import mongoose from "mongoose";

const bookShema =mongoose.Schema({
    name:String,
    title: String,
    price:Number,
    category: String,
    image:String
})
  const Spices =mongoose.model("Spices",bookShema);
  
  export default Spices;
