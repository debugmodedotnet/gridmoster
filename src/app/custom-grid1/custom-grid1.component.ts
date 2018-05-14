import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-custom-grid1',
  templateUrl: './custom-grid1.component.html',
  styleUrls: ['./custom-grid1.component.css']
})
export class CustomGrid1Component implements OnInit {
  public localData: any[];
  title = 'custom-grid1';
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.localData = employeesData;
  }

  pickerOpen () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 'initial');
  }

  pickerClose () {
    this.renderer.setStyle(document.querySelector('.igx-grid__tbody'), 'z-index', 1);
  }
}
