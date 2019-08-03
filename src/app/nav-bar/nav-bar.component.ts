import { Component, OnInit } from '@angular/core';
import {Notification} from '../model/notification';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  notificationList = new Array();

  constructor() {
    this.insertDumyData();
   }

  ngOnInit() {  
    this.notificationList.forEach( elem => {
      console.log(elem);
  });
  }

  /**
   * insert fake data
   */
  public insertDumyData = () => {

    let n1 = new Notification(1,"Microsoft TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript", "5-1.png");
    let n2 = new Notification(1,"Microsoft TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript", "5-1.png");
    let n3 = new Notification(1,"Microsoft TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript", "5-1.png");

    this.notificationList.push(n1);
    this.notificationList.push(n2);
    this.notificationList.push(n3);

  }
}
