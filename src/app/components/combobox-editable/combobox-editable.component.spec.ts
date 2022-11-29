import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxEditableComponent } from './combobox-editable.component';

describe('ComboboxEditableComponent', () => {
  let component: ComboboxEditableComponent;
  let fixture: ComponentFixture<ComboboxEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboboxEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboboxEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
