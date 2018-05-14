import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AwesomeGrid1Component } from './awesome-grid1.component';
import {
  IgxGridModule,
  IgxProgressBarModule,
  IgxAvatarModule,
  IgxBadgeModule,
  IgxIconModule,
  IgxSwitchModule,
  IgxInputGroupModule
} from 'igniteui-angular/main';
describe('AwesomeGrid1Component', () => {
  let component: AwesomeGrid1Component;
  let fixture: ComponentFixture<AwesomeGrid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeGrid1Component ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        IgxGridModule,
        IgxProgressBarModule,
        IgxAvatarModule,
        IgxBadgeModule,
        IgxIconModule,
        IgxSwitchModule,
        IgxInputGroupModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
