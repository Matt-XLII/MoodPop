import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBurgerComponent } from './menu-burger.component';

describe('MenuBurgerComponent', () => {
  let component: MenuBurgerComponent;
  let fixture: ComponentFixture<MenuBurgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBurgerComponent]
    });
    fixture = TestBed.createComponent(MenuBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
