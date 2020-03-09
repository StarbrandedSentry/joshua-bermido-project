import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {
  gmMilkTea = [
    {
      name: "EXO's Black Pearl Milk Tea",
      tallPrice: '50',
      grandePrice: '60'
    },
    {
      name: "Girls Generation's Gee Wintermelon",
      tallPrice: '60',
      grandePrice: '70'
    },
    {
      name: 'F(x) Pinocchio Taro Cream',
      tallPrice: '65',
      grandePrice: '75'
    },
    {
      name: "BOA's Hurricane Venus Okinawa",
      tallPrice: '70',
      grandePrice: '80'
    },
    {
      name: 'Super Junior No Other Hokaido',
      tallPrice: '70',
      grandePrice: '80'
    },
    {
      name: "RV's Be Natural Chocolate",
      tallPrice: '65',
      grandePrice: '75'
    },
    {
      name: 'EXO CBX Horololo Rocky Road',
      tallPrice: '75',
      grandePrice: '85'
    }
  ];

  ygFruitTea = [
    {
      name: "Big Bang's Flower Road Wintermelon",
      tallPrice: '55',
      grandePrice: '65'
    },
    {
      name: "2NE1's The Best Green Apple",
      tallPrice: '55',
      grandePrice: '65'
    },
    {
      name: "Blackpink's Bubblegum",
      tallPrice: '65',
      grandePrice: '75'
    },
    {
      name: "AKMU's Dinosaur Kiwi",
      tallPrice: 55,
      grandePrice: '65'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
