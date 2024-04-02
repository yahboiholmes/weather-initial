var express = require( 'express' );
var climate_router = express.Router();
var connection = require('../config/database')


climate_router.get('/climate', (req,res) => {
        var sql = "SELECT * FROM climate";
        connection.query(sql ,(err, result)=> {
            if (err) throw err;
            console.log(result);
            res.status(200).json({Climate:result })
        });
});


climate_router.post('/climate', (req,res)=>{
    const {location, temp, humidity} = req.body;

    var sql = "INSERT INTO climate VALUES (?,?,?)";
    connection.query(sql, [location,temp,humidity], (err, result)=>{
        if(err) throw err;

        console.log('inserted successfully',result);
        res.status(201).json({message: "Successfully added", climate: {location,temp,humidity}})
    })
})

climate_router.delete('/climate/:location', (req,res)=>{
    const location = req.params.location;
    var sql = "DELETE FROM climate WHERE location =?";
    connection.query(sql,[location], (err, result)=>{
        if(err) throw err;

        console.log('deleted successfully', result);
        res.status(200).json({message: "successfully deleted"})
    })
})

module.exports = climate_router;
