import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPortalComponent } from './nav-bar-portal.component';

describe('NavBarPortalComponent', () => {
  let component: NavBarPortalComponent;
  let fixture: ComponentFixture<NavBarPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
