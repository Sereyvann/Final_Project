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

  vehicleForm !: FormGroup;
  constructor(private formbuilder: FormBuilder,private http: HttpClient,  private router: Router) { }


  ngOnInit(): void {
  
    this.vehicleForm = this.formbuilder.group({
      id: [''],
      type: [''],
      model: [''],
      price: [''],

    })
  }
  insert() {
    this.http.post<any>("http://localhost:3000/vehicleForm", this.vehicleForm.value).subscribe(res => {
      alert("Vehicle Added Successfully");
      this.vehicleForm.reset();
      this.router.navigate(['output']);
    })
  }

}
