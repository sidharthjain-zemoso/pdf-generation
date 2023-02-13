import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForPrintComponent } from './table-for-print.component';

describe('TableForPrintComponent', () => {
  let component: TableForPrintComponent;
  let fixture: ComponentFixture<TableForPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableForPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableForPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
