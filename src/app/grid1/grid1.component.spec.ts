import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid1Component } from './grid1.component';
import { IgxGridModule } from 'igniteui-angular/main';

describe('Grid1Component', () => {
  let component: Grid1Component;
  let fixture: ComponentFixture<Grid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grid1Component ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});