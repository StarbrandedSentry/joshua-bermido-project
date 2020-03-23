import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  success = false;

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.clearText();
    this.success = true;
  }

  onCloseClick() {
    this.success = false;
  }

  clearText(): void {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
