import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tr-slider',
  templateUrl: './tr-slider.component.html',
  styleUrls: ['./tr-slider.component.scss']
})
export class TrSliderComponent implements OnInit {

  @ViewChild('elemToScroll' , { static: false }) public widgetsContent: ElementRef<any>;

  private listItemProduct = new Array();

  constructor(private router: Router) { 
    this.getListItemProduct();
  }

  ngOnInit() {
  }

  /**
   * Scroll to Right of Slider items
   */
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }

  /**
   * Scroll to left of Slider items
   */
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }

  /**
   * List item product of tr-slider component 
   */
  getListItemProduct = () => {
    let p1 = new Product(1,"Acer R3", 4, "Core i5 (8 GB/128 GB SSD/OS X Retina RMF ...", 800);

    // push to list 
    this.listItemProduct.push(p1);
    this.listItemProduct.push(p1);
    this.listItemProduct.push(p1);
  }


  /**
   * Navigate to the Details page 
   */
  goToDetails = (id) => {
    this.router.navigate(['/product', id]);
  }

}
