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
  error = false;

  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    if (!this.name || !this.email || !this.message) {
      this.error = true;
      return;
    }
    this.clearText();
    this.success = true;
  }

  onCloseClick() {
    this.success = false;
    this.error = false;
  }

  clearText(): void {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
