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

const plants = [
  {
    id: 9,
    name: "Bamboo",
    category: "Indoor",
    image: "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
    price: "150",
    discription: "Lucky Bamboo Plant - 3 Layer",
  },
  {
    id: 7,
    name: "rose",
    category: "Indoor",
    image: "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
    price: "200",
    discription: "rose plant",
  },

  {
    id: 5,
    name: "mango",
    category: "Indoor",
    image: "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
    price: "100",
    discription: "mango plant",
  },
];

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
