import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableForPrintComponent } from './components/table-for-print/table-for-print.component';
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart.component';
import { MultilineZoomGraphComponent } from './components/multiline-zoom-graph/multiline-zoom-graph.component';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list'; 
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    TableForPrintComponent,
    StackedBarChartComponent,
    MultilineZoomGraphComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    NgApexchartsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
