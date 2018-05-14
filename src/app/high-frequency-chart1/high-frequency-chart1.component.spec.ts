import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HighFrequencyChart1Component } from './high-frequency-chart1.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';

describe('HighFrequencyChart1Component', () => {
  let component: HighFrequencyChart1Component;
  let fixture: ComponentFixture<HighFrequencyChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighFrequencyChart1Component],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighFrequencyChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
