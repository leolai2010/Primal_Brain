import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DrawableDirective } from './drawable.directive';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { AboutComponent } from './about/about.component';
import { ThesisComponent } from './thesis/thesis.component';
import { WormComponent } from './worm/worm.component';
import { WormdetailComponent } from './wormdetail/wormdetail.component';
import { DrugComponent } from './drug/drug.component';
import { DrugdetailComponent } from './drugdetail/drugdetail.component';
import { ChartComponent } from './chart/chart.component';
import { MnMComponent } from './mn-m/mn-m.component';
import { ExpDComponent } from './exp-d/exp-d.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplicationComponent,
    IntelligenceComponent,
    AboutComponent,
    ThesisComponent,
    WormComponent,
    WormdetailComponent,
    DrugComponent,
    DrugdetailComponent,
    ChartComponent,
    DrawableDirective,
    MnMComponent,
    ExpDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
