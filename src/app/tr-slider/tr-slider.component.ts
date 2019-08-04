import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tr-slider',
  templateUrl: './tr-slider.component.html',
  styleUrls: ['./tr-slider.component.scss']
})
export class TrSliderComponent implements OnInit {


  @ViewChild('elemToScroll' , { static: false }) public widgetsContent: ElementRef<any>;

  constructor() { }

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

}
