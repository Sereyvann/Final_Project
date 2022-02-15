import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      phoneNum: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  signUp() {
    this.http.post<any>("http://localhost:3000/signUpUsers", this.signupForm.value).subscribe(res=> {
      alert("Sign Up Successfully");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err => {
      alert("Something Went Wrong")
    })
  }

}
