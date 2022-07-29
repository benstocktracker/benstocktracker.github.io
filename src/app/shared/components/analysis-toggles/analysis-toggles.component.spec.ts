import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTogglesComponent } from './analysis-toggles.component';

describe('AnalysisTogglesComponent', () => {
  let component: AnalysisTogglesComponent;
  let fixture: ComponentFixture<AnalysisTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisTogglesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
