import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineZoomGraphComponent } from './multiline-zoom-graph.component';

describe('MultilineZoomGraphComponent', () => {
  let component: MultilineZoomGraphComponent;
  let fixture: ComponentFixture<MultilineZoomGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultilineZoomGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultilineZoomGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
