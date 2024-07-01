import express, { json } from "express";
import dotenv, { config } from "dotenv"
dotenv.config()
const app = express()
app.use(express.json())

const plants = [
    {
        "id": 9,
        "name": "Bamboo",
        "category": "Indoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": "150",
        "discription": "Lucky Bamboo Plant - 3 Layer"
    },
    {
        "id": 7,
        "name": "rose",
        "category": "Indoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": "200",
        "discription": "rose plant"
    },

    {
        "id": 5,
        "name": "mango",
        "category": "Indoor",
        "image": "https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121",
        "price": "100",
        "discription": "mango plant"
    }
]

app.post("/plant", (req, res) => {
    const { name, category, image, price, discription } = req.body



    if (!name || !category || !image || !price || !discription) {

        return res.json({
            success: false,
            message: "Please fill all the fields",
            data: null
        })
    }

    const randomId = Math.round(Math.random() * 1000)

    const newPlant = {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        discription: discription
    }

    plants.push(newPlant)

    res.json({
        message: "plant added successfully",
        success: true,
        data: newPlant
    })
})

app.get("/plants", (req, res) => {
    res.json({
        message: "plants fetched successfully",
        success: true,
        data: plants
    })
})

app.get("/plant/:id", (req, res) => {
    const { id } = req.params

    const plant = plants.find((p) => p.id === id)

    res.json({
        message: "plant fetched successfully",
        success: true,
        data: plant
    })
})

app.put("/plant/:id", (req, res) => {
    const {
        id: randomId,
        name: name,
        category: category,
        image: image,
        price: price,
        discription: discription
    } = req.body

    const { id } = req.params

    let index = -1

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i
        }
    })
    const newObj = {
        id,
        name,
        category,
        image,
        price,
        discription
    }
    if (index == -1) {
        res.json({
            message: `plant not found ${id}`,
            success: false,
        })
    }
    else {
        plants[index] = newObj
    }
    res.json({
        message: "plant updated successfully",
        success: true,
        data: newObj
    })
})

// app.delete("/plant/:id", (req, res) => {
//     const { id } = req.params;
//     let index = -1;

//     plants.forEach((plant, i) => {
//         if (plant.id == (id)) {
//             index = i;
//         }
//     });

//     if (index === -1) {
//         res.json({
//             message: "plant not found",
//             success: false
//         });
//     } else {
//         plants.splice(index, 1);
//         res.json({
//             message: "plant deleted successfully",
//             success: true
//         });
//     }
// });

app.delete("/plant/:id", (req, res) => {
    const { id } = req.params;
    let index = -1
    plants.forEach((plant, i) => {
    if (plant.id == (id)) {
            index = i
        }})

    if (index == -1) {
       return res.json({
            message: `plant not found with ${id}`,
            success: false
        })} 

        plants.splice(index, 1)

        res.json({
            message: "plant deleted successfully",
            success: true,
            data: null

        })
    
    })



    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

