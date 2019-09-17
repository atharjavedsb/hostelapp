import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map }  from 'rxjs/operators';
 



@Injectable()
export class HostelRoomServicesService {

  constructor(private _http:Http) { }

  //Save All Record

  SaveAllFormRecord(newFormRecord){
    console.log(newFormRecord)
    return this._http.post('api/roomsave', newFormRecord).pipe(map(res=>res.json()));

  }

 //Get All Record
getAllRecordB(){
    return this._http.get('api/getallRecord').pipe(map(res=>res.json()))
}

//Delete Record
deleteRoomRecord(body:any){  
    
  var header = new Headers();
  header.append("Content-Type", "application/json");
  return this._http.delete('api/deleteRecord',body).pipe(map(res => res.json()));
}
 
}
