import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CategoryChart1Component } from './category-chart1.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';

describe('CategoryChart1Component', () => {
  let component: CategoryChart1Component;
  let fixture: ComponentFixture<CategoryChart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryChart1Component],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', done => {
    expect(component).toBeTruthy();
    fixture.whenStable().then(done);
  });
});
