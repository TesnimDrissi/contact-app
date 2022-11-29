const user = require("../database/models/user")

module.exports = {
   
    getAll: function(req, res) {
        console.log('hello from the other side');
        user.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },

    add: function(req, res) {
        user.add((err,results)=>{
              if(err) res.status(500).send(err);
            else res.json(results)
        },req.body)
    },
    
    getOne: function(req, res) {
        user.add(function(err){
            if(err) res.status(500).send(err);
            else res.json(results)
        },[req.params.id])
    },
  
    deleteUser : function(req, res) {
        user.deleteUser((err,results)=>{
            if(err) res.status(500).send(err);
            else res.json(results)
        },[req.params.id])
    },
    updateUser: (req,res)=> {
     
        user.updateUser((err,results)=>{
            if(err) res.status(500).send(err);
            else res.json(results)
         },[req.body])
    }


}