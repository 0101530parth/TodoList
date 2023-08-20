const express = require('express');
const Todo = require('../model/Todo.js')
const route = express.Router();
//const addTodo =require('../controller/todo-controller.js');
route.post('/todos',async(req,res)=> {
    try{
    console.log(req.body)
    const newTodo = await Todo.create(req.body)
    await newTodo.save();

    res.status(200).json(newTodo);
}catch (error) {
 return res.status(500).json(error.message);
}
});
route.get('/todos', async(req,res)=> {
    try{
        const todos = await Todo.find({}).sort({'createdAT':-1 })
        return res.status(200).json(todos);
    
    }catch(error){
        return res.status(500).json(error.message);
    }
})
    
route.get('/todos/:id', async(req,res)=>{
    try{
    const todoRef =  await Todo.findById(req.params.id); 
     const todo = await Todo.findOneAndUpdate({_id: req.params.id},
        {done: !todoRef.done}
        )
        await todo.save();
        return res.status(200).json(todo);
    }catch(error){
        return res.status(500).json(error.message);
    }
})
route.put('/todos/:id', async(req,res)=>{
    try{
     await Todo.findOneAndUpdate({_id: req.params.id},
        {data: req.body.data}
        )
        const todo = await Todo.findById(req.params.id);
        
        return res.status(200).json(todo);
    }catch(error){
        return res.status(500).json(error.message);
    }
})

route.delete('/todos/:id', async(req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete( req.params.id)
           
           
           return res.status(200).json(todo);
       }catch(error){
           return res.status(500).json(error.message);
       }
})


module.exports = route;