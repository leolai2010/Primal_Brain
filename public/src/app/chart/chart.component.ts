import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() data;
   barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    backgroundColor: '#ef6c00',
    scales: {
      xAxes: [{
                  gridLines: {
                      display: false
                  },
                  ticks: {
                    fontSize: 10
                }
              }],
      yAxes: [{
              display: false,
                  gridLines: {
                      display: false
                  }   
              }]
      }
  };
   barChartLabels = ['Amphetamine', 'THC', 'Cocaine', 'Morphine', 'Secobarbital', 'Zolpidem', '25I-NBOMe', 'Fentanyl', 'MA-CHMINACA', 'Methamphetamine'];
   barChartType = 'bar';
   barChartLegend = false;
   barChartData: any;
  
   ngOnChanges() {
    this.barChartData = [
      { 
        data: this.data || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        label: 'Predictions',
        backgroundColor: '#eff0f1',
      }];
  }
}