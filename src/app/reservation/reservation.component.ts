import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  contact: string;
  resDate;
  fromTime;
  toTime;
  success = false;
  error = false;
  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    if (
      !this.name ||
      !this.email ||
      !this.message ||
      !this.contact ||
      !this.resDate ||
      !this.fromTime ||
      !this.toTime
    ) {
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
    this.contact = '';
    this.resDate = '';
    this.fromTime = '';
    this.toTime = '';
  }
}
