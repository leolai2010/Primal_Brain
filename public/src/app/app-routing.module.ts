import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { ApplicationComponent } from './application/application.component';
import { WormComponent } from './worm/worm.component';
import { DrugComponent } from './drug/drug.component';
import { ThesisComponent } from './thesis/thesis.component';
import { AboutComponent } from './about/about.component';
import { WormdetailComponent } from './wormdetail/wormdetail.component';
import { DrugdetailComponent } from './drugdetail/drugdetail.component';
import { MnMComponent } from './mn-m/mn-m.component';
import { ExpDComponent } from './exp-d/exp-d.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'intelligence', component: IntelligenceComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'worm', component: WormComponent, children:[
    { path: 'details/:id', component: WormdetailComponent }
  ]},
  { path: 'drug', component: DrugComponent, children:[
    { path: 'details/:id', component: DrugdetailComponent }
  ]},
  { path: 'thesis', component: ThesisComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mn-m', component: MnMComponent },
  { path: 'exp-d', component: ExpDComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
