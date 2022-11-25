import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSheetViewComponent } from './budget-sheet-view.component';

describe('BudgetSheetViewComponent', () => {
  let component: BudgetSheetViewComponent;
  let fixture: ComponentFixture<BudgetSheetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetSheetViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetSheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
