import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeJComponent } from './modal-type-j.component';

describe('ModalTypeJComponent', () => {
  let component: ModalTypeJComponent;
  let fixture: ComponentFixture<ModalTypeJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTypeJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTypeJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
