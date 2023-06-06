import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmotivatedComponent } from './unmotivated.component';

describe('UnmotivatedComponent', () => {
  let component: UnmotivatedComponent;
  let fixture: ComponentFixture<UnmotivatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnmotivatedComponent]
    });
    fixture = TestBed.createComponent(UnmotivatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
