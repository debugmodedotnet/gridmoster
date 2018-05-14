import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HighVolumeChart1Component } from './high-volume-chart1.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';

describe('HighVolumeChart1Component', () => {
  let component: HighVolumeChart1Component;
  let fixture: ComponentFixture<HighVolumeChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighVolumeChart1Component],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighVolumeChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
