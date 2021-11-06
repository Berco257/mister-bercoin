import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bercoinChartComponent } from './bercoin-chart.component';

describe('bercoinChartComponent', () => {
  let component: bercoinChartComponent;
  let fixture: ComponentFixture<bercoinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bercoinChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bercoinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
