import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('elemToScroll' , { static: false }) public widgetsContent: ElementRef<any>;

  constructor() { }

  ngOnInit() {

  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 250), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 250), behavior: 'smooth' });
  }

}
