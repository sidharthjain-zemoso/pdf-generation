import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnChanges {

  @Input() graphData;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions;

  constructor() {
    
  }
  ngOnChanges(changes): void {
    console.log(changes);
    
    this.chartOptions = {
      series: this.graphData?.data,
      colors : this.graphData?.colors,
      chart: {
        type: "bar",
        height: 350,
        width:this.graphData?.data[0]?.data.length*100<window.innerWidth?"100%":this.graphData?.data[0]?.data.length*100,
        stacked: true,
        stackType: this.graphData.isStacktypePercent?"100%":''
      },
      grid: {
        show: false,      // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: false  //or just here to disable only x axis grids
          }
        },  
        yaxis: {
          lines: { 
            show: false  //or just here to disable only y axis
          }
        },   
      },
      plotOptions: {
        bar: {
          horizontal: this.graphData?.isHorizontal??false,
          // columnWidth: 40
          // borderRadius: this.graphData.bar?.borderRadius??0,
          // borderRadiusWhenStacked: 'all',
          // borderRadiusApplication:'end'
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.graphData.categories,
        // labels: {
        //   formatter: function(val) {
        //     return val + "K";
        //   }
        // }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        // y: {
        //   formatter: function(val) {
        //     return val + "K";
        //   }
        // }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: 20
      },
    };
  }
}