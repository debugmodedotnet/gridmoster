import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IgxNavigationDrawerModule, IgxNavbarModule,  IgxSliderModule,
  IgxDialogModule, IgxLayoutModule, IgxRippleModule, IgxGridModule, IgxCheckboxModule, IgxDatePickerModule, IgxProgressBarModule, IgxIconModule, IgxAvatarModule, IgxBadgeModule, IgxSwitchModule, IgxInputGroupModule, IgxButtonModule, IgxToggleModule } from 'igniteui-angular/main';
import { HomeComponent } from './home/home.component';
import { FinancialChart1Component } from './financial-chart1/financial-chart1.component';
import { IgxFinancialChartModule } from 'igniteui-angular-charts/ES5/igx-financial-chart-module';
import { CategoryChart1Component } from './category-chart1/category-chart1.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';
import { BasicGrid1Component } from './basic-grid1/basic-grid1.component';
import { CustomGrid1Component } from './custom-grid1/custom-grid1.component';
import { AwesomeGrid1Component } from './awesome-grid1/awesome-grid1.component';
import { MonsterGrid1Component } from './monster-grid1/monster-grid1.component';
import { IgxExcelExporterService } from 'igniteui-angular/services';
//import { FinancialGrid1Component } from './financial-grid1/financial-grid1.component';
import { HighFrequencyChart1Component } from './high-frequency-chart1/high-frequency-chart1.component';
import { HighVolumeChart1Component } from './high-volume-chart1/high-volume-chart1.component';
import { CustomTemplateGrid1Component } from './custom-template-grid1/custom-template-grid1.component';
import { Grid1Component } from './grid1/grid1.component';
import {BankService} from './grid1/grid1.service';
import { HttpClientModule } from '@angular/common/http';
// Application Imports
//import { AppComponent } from './app.component';
//import {AppService} from './financial-grid1/financial-grid1.service';
//import {BankEntity} from './financial-grid1/bankentity';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialChart1Component,
    CategoryChart1Component,
    BasicGrid1Component,
    CustomGrid1Component,
    AwesomeGrid1Component,
    MonsterGrid1Component,
    //FinancialGrid1Component,
    HighFrequencyChart1Component,
    HighVolumeChart1Component,
    CustomTemplateGrid1Component,
    Grid1Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxFinancialChartModule,
    IgxCategoryChartModule,
    IgxGridModule.forRoot(),
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxProgressBarModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxSwitchModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxSliderModule,
    IgxDialogModule,
    HttpClientModule
  ],
  providers: [IgxExcelExporterService , BankService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
