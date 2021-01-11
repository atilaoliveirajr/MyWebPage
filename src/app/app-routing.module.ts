import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { DataProtectionComponent } from './components/data-protection/data-protection.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "portfolio",
  component: PortfolioComponent
},
{
  path: "aboutme",
  component: AboutmeComponent
},
{
  path: "imprint",
  component: ImprintComponent
},
{
  path: "dataprotection",
  component: DataProtectionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
