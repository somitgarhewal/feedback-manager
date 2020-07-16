var mongoose = require('mongoose');
const user = require('../models/userModel');

const userController = {

   getUser : async (req, res) => {
      try{
         const userData= await user.find({})
         console.log("userData ", userData);
         res.send(userData.map((item) => item))
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured",error)
      }
   }, 

   addUser : async (req, res) => {
     
      const userSchema = new user( req.body);
      try{
      
      await userSchema.save()
      console.log("success",userSchema)
            res.send({ data: userSchema, success: true })
     } 
     catch(error){
      console.error("ERROR MESSAGE SEE" ,error);
      res.send("Error occured",error)
     }
   },

   loginUser : async (req, res) => {
      try{
         const data= await user.findOne({ userName: req.body.username, password: req.body.password })
         res.send({person: data})
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured")
      }
   },
   
   updateUser :async (req, res) => {
      try{
         let {id} = req.params;
      var data = req.body;
      console.log(data);
      const updatedUser= await user.findByIdAndUpdate(id, data)
		res.send({person: data, message: 'Successfully! User updated - ' + updatedUser.name, success: true});   
      } 
      catch{
         res.send({ message:"error occured " + err, success: false}) 
      }  
   },
   
   deleteUser : async(req, res) => {
      try{
         await user.remove({ _id : req.params.id })
         res.send({message: "user successfully deleted ",data:data, success: true})
      }      
      catch(error){
         res.send({message: "ERROR OCCURED ",success:false});
      } 
   },

   assignEmployee : async(req, res) => {
      try{
         await user.update(
            { _id: req.params.id }, 
            { $push: { assignedEmployees: req.body} }
        );
         console.log("res",res)
         res.send({message: "user successfully assigned ", success: true}) 
      }
      catch(error){
         console.log(error)
         res.send({message: "ERROR OCCURED ",success:false});
      }
   },


   deAssignEmployee : async(req, res) => {
      try{
         await user.update(
            { _id: req.params.id }, 
            { $pull: { assignedEmployees:  req.body } }
        );
         console.log("res",res)
         res.send({message: "user successfully de-assigned ", success: true}) 
      }
      catch(error){
         console.log(error)
         res.send({message: "ERROR OCCURED ",success:false});
      }
   }
}

module.exports = userController;