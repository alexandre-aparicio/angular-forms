import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  title = 'Example React Form';
 public formLogin!: FormGroup;


  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      
        email:['',
        [
          Validators.required,
          Validators.email 
        ]],
        password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]],
        youtube: ['',
        [
          Validators.required,
          Validators.pattern('^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$')
        ]],
        terms: ['',
        [
          Validators.required,
          Validators.requiredTrue
          
        ]]


     })
    
  }
  send(): any {
    console.log(this.formLogin.value)
  }

}
