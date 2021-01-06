import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
