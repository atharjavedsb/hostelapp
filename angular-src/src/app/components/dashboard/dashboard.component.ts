import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,AbstractControl, ValidationErrors } from '@angular/Forms';
 
import {HostelRoomServicesService} from "../../services/hostel-room-services.service";
import{hostelmodelrooms} from "./RoommodelClass";

import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HostelRoomServicesService],
})
export class DashboardComponent implements OnInit {
 
  constructor( private myHostelReq:HostelRoomServicesService ) { }

  //Access Modifires
  // public _id: string;
  // public CandidateFirstN: string;
  // public Candidatelastn: string; 
  // public MobileNumber: string;  
  // public addressfirst: string;
  // public addresssecond: string;
  // public floor: number;
  // public rommno: number;
  // public roomassignDt: string;  
  // public rent:Number; 


  //Define Arraay
  public hostelrooms : hostelmodelrooms[];  

  //Valdation
  public hostelform = new FormGroup({
  
    CandidateName: new FormControl("", [Validators.required]),
		CandidateLastName: new FormControl("", [ Validators.required]),
		mobileNo: new FormControl("", [Validators.required]),
		Addressone: new FormControl("", [Validators.required]),
		Addresstwo: new FormControl("", [Validators.required]),		
		floorNumber: new FormControl("",[Validators.required]),
		RoomNo: new FormControl("",[Validators.required]),	 
		RoomasignDate: new FormControl("", [Validators.required]),
    roomRent: new FormControl("", [Validators.required]),
    						
	})

  // Getters
  get CandidateName() {
		return this.hostelform.get("CandidateName");
  }
  get CandidateLastName() {
		return this.hostelform.get("CandidateLastName");
  }
  get mobileNo() {
		return this.hostelform.get("mobileNo");
  }
  get Addressone() {
		return this.hostelform.get("Addressone");
  }
  get Addresstwo() {
		return this.hostelform.get("Addresstwo");
  }
  get floorNumber() {
		return this.hostelform.get("floorNumber");
  }
  get RoomNo() {
		return this.hostelform.get("RoomNo");
  }
  get RoomasignDate() {
		return this.hostelform.get("RoomasignDate");
  }
  get roomRent() {
		return this.hostelform.get("roomRent");
  }


  
  // ADD Records
  addButtonRecord()  {  

    this.myHostelReq.SaveAllFormRecord(this.hostelform.value).subscribe((reser => { 
      (this.hostelrooms.push(reser)); 
    
    }))

  }
  
    // Delete data from table rows  
   deleteFromRoom(id:any){
      let DeleteRoomRecords  = {
          body:{
            _id:id
          }
      }
      this.myHostelReq.deleteRoomRecord(DeleteRoomRecords).subscribe(result=>{
        this.hostelrooms.splice(id,1);
      })
  }
   

 
  //Edit Room Record 

  EditHostelRoom(index){  
      this.hostelform.get('CandidateName').setValue(this.hostelrooms[index].CandidateName); 
      this.hostelform.get('CandidateLastName').setValue(this.hostelrooms[index].CandidateLastName);  
      this.hostelform.get('mobileNo').setValue(this.hostelrooms[index].mobileNo);
      this.hostelform.get('Addressone').setValue(this.hostelrooms[index].Addressone); 
      this.hostelform.get('Addresstwo').setValue(this.hostelrooms[index].Addresstwo);
      this.hostelform.get('floorNumber').setValue(this.hostelrooms[index].floorNumber);
      this.hostelform.get('RoomNo').setValue(this.hostelrooms[index].RoomNo);
      this.hostelform.get('RoomasignDate').setValue(this.hostelrooms[index].RoomasignDate);
      this.hostelform.get('roomRent').setValue(this.hostelrooms[index].roomRent);  
  }

  // On Update (Get Values from table row from [Form Fields] and change accordingly will update in table row)
      updateReservation(index) {
          this.hostelrooms[index] = this.hostelform.value;
      }  

  //Ng OnInit
  ngOnInit() {

    //Get All Record
    this.myHostelReq.getAllRecordB().subscribe(Allfetchedrecord => {
      // console.log(Allfetchedrecord.result)fds
      this.hostelrooms = Allfetchedrecord;
   
    });

}
}