import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodiarioComponent } from './libro-diario.component';

describe('LibroDiarioComponent', () => {
  let component: LibrodiarioComponent;
  let fixture: ComponentFixture<LibrodiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrodiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrodiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
