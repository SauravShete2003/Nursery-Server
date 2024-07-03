const postPlant = ((req, res) => {
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

const getPlants = ((req, res) => {
    res.json({
        message: "plants fetched successfully",
        success: true,
        data: plants
    })
})

const getPlantId = ((req, res) => {
    const { id } = req.params

    const plant = plants.find((p) => p.id === id)

    res.json({
        message: "plant fetched successfully",
        success: true,
        data: plant
    })
})

const putPlantId = ( (req, res) => {
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

const deletePlantId = ((req, res) => {
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

export {
    postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
}