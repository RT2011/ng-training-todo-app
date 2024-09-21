import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from './model';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    userform!:FormGroup;
    usertask!:FormGroup;  

    data:undefined|datamodel[];
  constructor(private formbuilder:FormBuilder, private api:ApiService) {}

ngOnInit(): void {
    this.userform=this.formbuilder.group({
      name:['', Validators.required],
      number:['', Validators.required],
      email:['', Validators.required],
     // password:['', Validators.required],
    })

     this.usertask=this.formbuilder.group({
      AssignedTo:['', Validators.required],
      Status:['', Validators.required],
      date:['', Validators.required],
      priority:['', Validators.required],
      description:['', Validators.required],
    })
      
    
}
adduser(data:datamodel){
 // console.log(data)
 this.api.adduser(data).subscribe((res=>{
  
 }))

 }
 
 addtask(data:datamodel){
  //console.log(data)
  this.api.addtask(data).subscribe((res=>{
    this.userform.reset();
  }))
}

getuser(){
  this.api.getuser().subscribe((res=>{
    this.data=res;
  }))
}

}
