var express = require( 'express' );
var user_router = express.Router();
var connection = require('../config/database')

//reading
user_router.get('/users', (req,res) => {
        var sql = "SELECT * FROM users";
        connection.query(sql ,(err, result)=> {
            if (err) throw err;
            console.log(result);
            res.status(200).json({Users:result })
        });
});

//creating
user_router.post('/users', (req, res) => {
    const { f_name, l_name, age } = req.body;
    
    var sql = "INSERT INTO users (f_name, l_name, age) VALUES (?, ?, ?)";
    connection.query(sql, [f_name, l_name, age], (err, result) => {
        if (err) throw err;

        console.log("User added successfully:", result);
        res.status(201).json({ message: "User added successfully.", user: { f_name, l_name, age } });
    });
})

//updating
 user_router.put('/users/:id', (req,res)=>{
    const id = req.params.id;
    const f_name = req.body.f_name;
    const l_name = req.body.l_name;
    const age = req.body.age;

    var sql = "UPDATE users SET  f_name =?, l_name =?, age =? WHERE id=?";
    connection.query(sql,[f_name,l_name, age,id],(err,result)=>{
        if (err) throw err;
        console.log("updated sucessfully", result);
        res.status(201).json({ message: "User updated successfully.", user: {id, f_name, l_name, age} });
    })

}) 

//deleting
user_router.delete('/users/:id', (req, res) => {
    const id = req.params.id;


    var sql = "DELETE FROM users WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
        if (err) throw err;

        console.log("User deleted successfully.", result);
        res.status(200).json({ message: "User deleted successfully." });
    });
});


module.exports = user_router;
