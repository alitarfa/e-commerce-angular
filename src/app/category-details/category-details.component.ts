import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  private titleCategory = "Title Category";
  panelOpenState = false;
  
  constructor() { }

  ngOnInit() {
  }

}
