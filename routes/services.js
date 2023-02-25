const express = require("express");
const router = express.Router();
const Services = require("../Models/Services");


router.get("/getservices", async(req, res)=>{
    try {
        const services = await Services.find()
        res.json(services)
        
    } catch (error) {
        console.log(error)
        
    }
})


module.exports = router;