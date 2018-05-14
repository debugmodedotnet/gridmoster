import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';

@Component({
  selector: 'app-basic-grid1',
  templateUrl: './basic-grid1.component.html',
  styleUrls: ['./basic-grid1.component.css']
})
export class BasicGrid1Component implements OnInit {
  public localData: any[];
  title = 'basic-grid1';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }
}
