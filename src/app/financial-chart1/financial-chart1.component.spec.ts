import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialChart1Component } from './financial-chart1.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';

describe('FinancialChart1Component', () => {
  let component: FinancialChart1Component;
  let fixture: ComponentFixture<FinancialChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancialChart1Component],
      imports: [IgxFinancialChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
