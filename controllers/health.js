
const getHealth =(req ,res)=>{
    res.json({
        message:"server is up and running",
        success : true
    })
}

export { getHealth }