import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FinancialChart1Component } from './financial-chart1/financial-chart1.component';
import { CategoryChart1Component } from './category-chart1/category-chart1.component';
import { BasicGrid1Component } from './basic-grid1/basic-grid1.component';
import { CustomGrid1Component } from './custom-grid1/custom-grid1.component';
import { AwesomeGrid1Component } from './awesome-grid1/awesome-grid1.component';
import { MonsterGrid1Component } from './monster-grid1/monster-grid1.component';
//import { FinancialGrid1Component } from './financial-grid1/financial-grid1.component';
import { HighFrequencyChart1Component } from './high-frequency-chart1/high-frequency-chart1.component';
import { HighVolumeChart1Component } from './high-volume-chart1/high-volume-chart1.component';
import { CustomTemplateGrid1Component } from './custom-template-grid1/custom-template-grid1.component';
import { Grid1Component } from './grid1/grid1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'financial-chart1', component: FinancialChart1Component, data: { text: 'financial-chart1' } },
  { path: 'category-chart1', component: CategoryChart1Component, data: { text: 'category-chart1' } },
  { path: 'basic-grid1', component: BasicGrid1Component, data: { text: 'basic-grid1' } },
  { path: 'custom-grid1', component: CustomGrid1Component, data: { text: 'custom-grid1' } },
  { path: 'awesome-grid1', component: AwesomeGrid1Component, data: { text: 'awesome-grid1' } },
  { path: 'monster-grid1', component: MonsterGrid1Component, data: { text: 'monster-grid1' } },
  //{ path: 'financial-grid1', component: FinancialGrid1Component, data: { text: 'financial-grid1' } },
  { path: 'high-frequency-chart1', component: HighFrequencyChart1Component, data: { text: 'high-frequency-chart1' } },
  { path: 'high-volume-chart1', component: HighVolumeChart1Component, data: { text: 'high-volume-chart1' } },
  { path: 'custom-template-grid1', component: CustomTemplateGrid1Component, data: { text: 'custom-template-grid1' } },
  { path: 'grid1', component: Grid1Component, data: { text: 'grid1' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
