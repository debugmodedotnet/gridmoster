import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGrid1Component } from './basic-grid1.component';
import { IgxGridModule } from 'igniteui-angular/main';

describe('BasicGrid1Component', () => {
  let component: BasicGrid1Component;
  let fixture: ComponentFixture<BasicGrid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGrid1Component ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
