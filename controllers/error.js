const handlePageNotFound = ((req , res)=>{
    res.send(`<div style = "background-color : skyblue ";>
        <h1  style="text-align :center;"> 404 Not Found </h1>
        </div>`)
})

export {
    handlePageNotFound
}