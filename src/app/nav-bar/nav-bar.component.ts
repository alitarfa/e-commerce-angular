import { Component, OnInit } from '@angular/core';
import {Notification} from '../model/notification';
import { Category } from '../model/category';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private categoryList = new Array();

  constructor() {
    
   }

  ngOnInit() {  
       // init the menu
       this.getCategoryList();
  }

   /**
   * get list Category from service layer
   */
  public getCategoryList = () => {
    // call the service layer then invok the proper method 

    // in this case we gonna just use dumy data to test the application
    let c1 = new Category(1, "Computer","desktop_mac");
    let c2 = new Category(2, "Computer","desktop_mac");
    let c3 = new Category(3, "Computer","desktop_mac");
    let c4 = new Category(4, "Computer","desktop_mac");
    let c5 = new Category(5, "Computer","desktop_mac");

    this.categoryList.push(c1);
    this.categoryList.push(c2);
    this.categoryList.push(c3);
    this.categoryList.push(c4);
    this.categoryList.push(c5);

  }
}
