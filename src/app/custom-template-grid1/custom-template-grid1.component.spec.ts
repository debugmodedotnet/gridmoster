import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTemplateGrid1Component } from './custom-template-grid1.component';
import { IgxGridModule } from 'igniteui-angular/main';

describe('CustomTemplateGrid1Component', () => {
  let component: CustomTemplateGrid1Component;
  let fixture: ComponentFixture<CustomTemplateGrid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTemplateGrid1Component ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTemplateGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
