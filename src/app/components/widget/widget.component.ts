import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
    `
    .radius-img{
      border-top-right-radius:1rem;
    }
    .radius-txt{
      border-bottom-right-radius:1rem;
      border-bottom-left-radius:1rem;
    }
    `
  ]
})
export class WidgetComponent implements OnInit {
  @Input() index:number=0;
  @Input() text:string="";
  constructor() { }
  
  ngOnInit(): void {
  }

}
