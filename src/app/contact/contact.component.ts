import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.name && this.email && this.message) {
      if (!this.email || !this.email.includes("@") || !this.email.includes(".com")) {
        alert("Please enter a valid email.");
        return;
      }
      console.log('Submitted: ' + this.name + this.email + this.message);
      alert("Message Sent!");
      this.name = "";
      this.email = "";
      this.message = "";
    }

  }
}
