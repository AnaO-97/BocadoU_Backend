const { Router } = require("express");
const { Products } = require("../schemas/index");

const routes = Router();

routes.get("/", async(req, res)=>{
    const products = await Products.find({})
    console.log("ruta")
    res.status(200).json({"prueba FULL" : products});
})

module.exports =  routes;