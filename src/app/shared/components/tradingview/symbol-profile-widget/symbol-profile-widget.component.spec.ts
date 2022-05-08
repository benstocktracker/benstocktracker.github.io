import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolProfileWidgetComponent } from './symbol-profile-widget.component';

describe('SymbolProfileWidgetComponent', () => {
  let component: SymbolProfileWidgetComponent;
  let fixture: ComponentFixture<SymbolProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolProfileWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
