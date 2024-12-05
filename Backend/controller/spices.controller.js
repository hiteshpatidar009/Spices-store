import Spices from "../model/book.model.js";


export const getSpices = async(req,res)=>{

    try {
        const spices = await Spices.find();
        res.status(200).json(spices);
    } catch (error) {
        
        console.log("error",error);
        res.status(500).json(error);
    }
};