const express=require('express')
const {Customer}=require('../models')
const router=express.Router();
router.get('/',async(req,res)=>{
const allCustomer=await Customer.findAll();
res.json(allCustomer);
});
router.post('/add',async(req,res)=>{
    const customer=req.body;
   await Customer.create(customer);
    res.json(customer);
})
router.patch('/update/:id',async(req,res)=>{
    let id=req.params.id;
   const data= await Customer.update(req.body,{where:{id:id}})
    res.json(data)
})
router.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id;
  const data = await Customer.destroy({where:{id:id}})
    res.json(data);
})




module.exports=router;