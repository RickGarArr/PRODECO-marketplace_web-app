import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public anio: number = new Date().getFullYear();
  public posteado: boolean = false;

  constructor( private formBuilder: FormBuilder ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      recordar: new FormControl(false , [Validators.required])
    });
  }

  
  isInvalid(control: string): boolean {
    if (this.loginForm.controls[control].invalid && this.posteado ){
      return true;
    } else {
      return false
    }
  }
  

  login() {
    this.posteado = true;
    if ( this.loginForm.invalid) {
      this.loginForm.controls['email'].markAllAsTouched();
      this.loginForm.controls['password'].markAllAsTouched();
    }
    console.log(this.loginForm.value);
  }

}
