import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public name: String;
  public email: String;
  public message: String;
  public warning: String;
  @Input() submit: boolean = false;
  @Output() out: EventEmitter<Boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {


    if(this.name == null || this.email == null || this.message == null)
    {
      this.warning = "The fields can not be empty";
    }
    else{
      this.warning = "";
    }


  }

}
