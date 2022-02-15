import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // formValue !: FormGroup;
  //constructor(private formbuilder: FormBuilder,private http: HttpClient,  private router: Router) { }
  constructor() { }

  ngOnInit(): void {
  }
    // this.formValue = this.formbuilder.group({
    //   name: [''],
    //   model: [''],
    //   price: [''],
    //   year: [''],

    // }) 

//   postVehicleDetails() {
//     this.http.post<any>("http://localhost:3000/vehicleForm", this.formValue.value).subscribe(res => {
//       alert("Vehicle Added Successfully");
//       this.formValue.reset();
//       this.router.navigate(['output']);
//     })
//   }

}
