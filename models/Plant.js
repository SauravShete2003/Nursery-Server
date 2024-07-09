import { Schema, model } from "mongoose";

const plantSchema = new Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
});

const Plant = model("plant", plantSchema);

export default Plant;
