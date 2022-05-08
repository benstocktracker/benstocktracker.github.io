import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProfilePanelComponent } from './stock-profile-panel.component';

describe('StockProfilePanelComponent', () => {
  let component: StockProfilePanelComponent;
  let fixture: ComponentFixture<StockProfilePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockProfilePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProfilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
