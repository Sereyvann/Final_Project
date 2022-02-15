import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  updateForm !: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {

    this.updateForm = this.formbuilder.group({
      id: [''],
      type: [''],
      model: [''],
      price: [''],

    })
  }
  update() {
    this.http.post<any>("http://localhost:3000/vehicleForm", this.updateForm.value).subscribe(res => {
      alert("Vehicle Added Successfully");
      this.updateForm.reset();
      this.router.navigate(['output']);
    })
  }

}
