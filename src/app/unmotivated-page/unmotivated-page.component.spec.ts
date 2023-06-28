import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmotivatedPageComponent } from './unmotivated-page.component';

describe('UnmotivatedPageComponent', () => {
  let component: UnmotivatedPageComponent;
  let fixture: ComponentFixture<UnmotivatedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnmotivatedPageComponent]
    });
    fixture = TestBed.createComponent(UnmotivatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
