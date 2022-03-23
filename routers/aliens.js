const express = require('express');
const router = express.Router()
const alien = require('../models/alien')

router.get('/',async(req,res)=>{
    try{
        const aliens= await alien.find( )
        res.json(aliens)
    }catch(err){

        res.send('Error'+err)
    }
    
})
router.get('/:id',async(req,res)=>{
    try{
        const onealien=await alien.findById(req.params.id)
        res.json(onealien);
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.post('/',async(req,res)=>{
    const a = new alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try{
        const a1 = await a.save()
        res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const updatealien = await alien.findById(req.params.id)
        updatealien.sub=req.body.sub
        const a1 = await updatealien.save()
        res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const deletealien = await alien.findById(req.params.id)
        const a1 = await deletealien.delete()
        res.send('The User got Deleted')
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports = router