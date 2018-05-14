import { Component } from '@angular/core';
import { AMZNData } from './data';

@Component({
  selector: 'app-financial-chart1',
  templateUrl: './financial-chart1.component.html',
  styleUrls: ['./financial-chart1.component.css']
})
export class FinancialChart1Component {

  public data = AMZNData;

}
