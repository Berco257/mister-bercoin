import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePreviewComponent } from './move-preview.component';

describe('MovePreviewComponent', () => {
  let component: MovePreviewComponent;
  let fixture: ComponentFixture<MovePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
