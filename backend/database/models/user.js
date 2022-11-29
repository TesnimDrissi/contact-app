const connection = require("../index");



module.exports = {
    getAll: function (callback) {
        const sql = 'SELECT * FROM `user`'
        connection.query(sql, function (err, results, fields) {
          callback(err, results);
        });
      },
      getOne: function(callback, id) {
        let syntax= 'SELECT * FROM user WHERE iduser= ?'
        connection.query(syntax, id, function(err, results){
          if(err) callback(err, null);
          else callback(null ,results)
        })
        },
      add: function (callback , values) {
         let syntax = 'INSERT INTO user SET name =? ,email=?, number=? ,gender=?;'
            connection.query(syntax, [values.name , values.email, values.number, values.gender], (err, results)=>{
              if(err) callback(err, null);
                else callback(null ,results)
            })
          },
       deleteUser:function (callback , id) {
         let syntax = 'delete from user where iduser=?;'
            connection.query(syntax,[id], (err, results)=>{
              if(err) callback(err, null);
                else callback(null ,results)
            })
          },
       updateUser : (callback,values) => {

          let syntax = `UPDATE user set name =?, email=? ,number=?, gender=?`;
            connection.query(syntax,values,(err, results) => {
              if(err) res.status(500).send(err);
              else res.json(results)
              }) 
        
},
}
