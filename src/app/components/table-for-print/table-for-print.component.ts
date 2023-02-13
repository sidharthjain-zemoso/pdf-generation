import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-for-print',
  templateUrl: './table-for-print.component.html',
  styleUrls: ['./table-for-print.component.css']
})
export class TableForPrintComponent implements OnInit {

  @Input() data = [];
  @Input() columnWidths = {};
  @Input() whiteListColumns = [];
  @Input() errorMessage = '';

  screenWidthFactor = 0;

  constructor() { }

  ngOnInit(): void {
      this.getScreenWidthFactor();
  }

  private getDenominator(){
    let den = 0;
    for(let i in this.whiteListColumns){
      let col = this.whiteListColumns[i];
      den += this.columnWidths[col];
    }
    return den;
  }

  getScreenWidthFactor(){
    let den = this.getDenominator();
    this.screenWidthFactor = (1000 - (54*2) - 30) / den;
  }

}
