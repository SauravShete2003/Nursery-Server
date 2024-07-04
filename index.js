import express, { json } from "express";
import dotenv, { config } from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());

import { getHealth } from "./controllers/health.js";
import { handlePageNotFound} from "./controllers/error.js";
import {
  postPlant,
  getPlants,
  getPlantId,
  putPlantId,
  deletePlantId,
} from "./controllers/plant.js";

const dbConnection = async ()=>{
 const conn = await mongoose.connect(process.env.MONGO_URL)

 if(conn){
  console.log(`Connected to DB 👍🏻`)
 }
 else{
  console.log(`Error connecting to DB 😢`)
 }
}

dbConnection()



app.get("/health", getHealth);
app.post("/plant", postPlant);
app.get("/plants", getPlants);
app.get("/plant/:id", getPlantId);
app.put("/plant/:id", putPlantId);
app.delete("/plant/:id" , deletePlantId);

app.use("*" , handlePageNotFound )

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
