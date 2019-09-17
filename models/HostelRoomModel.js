const mongoose = require('mongoose');

const HostelRoomDbSchema = mongoose.Schema({
    CandidateName:{
        type:String,
        require: true
    },
    CandidateLastName: {
        type: String,
        require: true
    },
    mobileNo: { 
        type: String, 
        require:true
     },
     Addressone: { 
        type: String, 
        require:true
        
     },
     Addresstwo:{
        type: String, 
        require:true
     },
     floorNumber:{ 
        type: Number,
        require: true
    },
     RoomNo: {
        type: Number,
        require: true
    },   
    RoomasignDate:{
        type: String,
        require: true
    },
    roomRent:{
        type: Number,
        require: true
    }
  
})



module.exports = mongoose.model('room',HostelRoomDbSchema)