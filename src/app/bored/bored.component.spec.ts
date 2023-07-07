import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredComponent } from './bored.component';

describe('BoredComponent', () => {
  let component: BoredComponent;
  let fixture: ComponentFixture<BoredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoredComponent]
    });
    fixture = TestBed.createComponent(BoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
