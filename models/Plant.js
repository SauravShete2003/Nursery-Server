import { Schema, model } from "mongoose";

const plantSchema = new Schema({
    name: String,
    category : String,
    description: String,
    image: String,
    price: Number,
   
})
const plant = model("plant" , plantSchema)
export default plant