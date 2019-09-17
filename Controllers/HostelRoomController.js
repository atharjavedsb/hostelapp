const HostelroomModel = require('../models/HostelRoomModel')

const HostelRoomSave = (req,res, next) => {

    let rommRecordObj= new HostelroomModel();

    rommRecordObj.CandidateName = req.body.CandidateName;
    rommRecordObj.CandidateLastName = req.body.CandidateLastName
    rommRecordObj.mobileNo = req.body.mobileNo
    rommRecordObj.Addressone = req.body.Addressone;
    rommRecordObj.Addresstwo = req.body.Addresstwo;
    rommRecordObj.floorNumber = req.body.floorNumber;
    rommRecordObj.RoomNo = req.body.RoomNo;
    rommRecordObj.RoomasignDate = req.body.RoomasignDate;
    rommRecordObj.roomRent = req.body.roomRent; 


    rommRecordObj.save((err, result) => {

        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
            
            
        }
    })

}

// Find Hostel All Rooms Record  
const findhostelRecord = (req, res, next) =>{
    HostelroomModel.find((err,result)=>{  
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
}

// Delete record from Room Table
const deletehostelRecord = (req, res, next) =>{
    console.log(req.body._id);
    HostelroomModel.findByIdAndRemove(req.body._id, (err,deletehostelRecords)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json({
            message: "Successfully delete one record",
            deletehostelRecords
        })
    })
}

// Exporting Modules

module.exports={
    HostelRoomSave,
    findhostelRecord,
    deletehostelRecord

}