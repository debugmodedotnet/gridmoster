import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-custom-template-grid1',
  templateUrl: './custom-template-grid1.component.html',
  styleUrls: ['./custom-template-grid1.component.css']
})
export class CustomTemplateGrid1Component implements OnInit {
  public localData: any[];
  title = 'custom-template-grid1';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
