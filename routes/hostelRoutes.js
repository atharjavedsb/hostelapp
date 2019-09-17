const express = require('express')
var routes = express.Router()
const hostelroomControl = require('../Controllers/HostelRoomController')

// Room allotment 
routes.post('/roomsave',hostelroomControl.HostelRoomSave);

//Get All Record
routes.get('/getallRecord', hostelroomControl.findhostelRecord);


//Delete Record
routes.delete('/deleteRecord', hostelroomControl.deletehostelRecord);

module.exports =routes