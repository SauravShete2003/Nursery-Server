import { Schema } from "mongoose";
import Plant from "../models/Plant.js";

const updateDescriptions = async () => {
  await mongoose.connect("mongodb://localhost:27017/yourdatabase");

  await Plant.updateMany({}, [
    { $set: { description: "$discription" } },
    { $unset: "discription" },
  ]);

  console.log("Updated all documents to use 'description' instead of 'discription'");
  mongoose.disconnect();
};


const postPlant = async (req, res) => {
  const { name, category, image, price, description } = req.body; // Changed 'discription' to 'description'

  const newPlant = new Plant({
    name: name,
    category: category,
    image: image,
    price: price,
    description: description, 
  });

  const savedPlant = await newPlant.save();

  res.json({
    message: "plant added successfully",
    success: true,
    data: savedPlant,
  });
};

const getPlants = async (req, res) => {
    const allPlant = await Plant.find()
  res.json({
    message: "plants fetched successfully",
    success: true,
    data: allPlant,
  });
};

const getPlantId = async (req, res) => {
  const { id } = req.params;

  const plant = await Plant.findById(id)

  res.json({
    message: "plant fetched successfully",
    success: true,
    data: plant,
  });
};

const putPlantId = async(req, res) => {
  const {
     name,
     category,
     image,
     price,
     description,
  } = req.body;

  const { id } = req.params;
  const updateResult = await Plant.updateOne({_id : id},{
    $set: {
        name: name ,
        category: category,
        image: image,
        price: price,
        description: description,
    }})
     const updatedPlant = await Plant.findById(id)

    res.json({
        message: "plant updated successfully",
        success: true,
        data : updatedPlant
    })
}

const deletePlantId = async (req, res) => {
  const { id } = req.params;
 await Plant.deleteOne({
    _id : id 
 })

  res.json({
    message: "plant deleted successfully",
    success: true,
    data: null,
  });
};

export { postPlant, getPlants, getPlantId, putPlantId, deletePlantId };
