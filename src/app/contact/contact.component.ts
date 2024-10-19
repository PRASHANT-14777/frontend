import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  constructor(
    private formbuilder : FormBuilder
  ){}

  contactForm : any = FormGroup;

  ngOnInit(): void {
   this.contactForm = this.formbuilder.group({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contact: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    message: new FormControl('', [Validators.required])
   })
  }


  onSubmit(){}
}
