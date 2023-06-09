import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryComponent } from './angry.component';

describe('AngryComponent', () => {
  let component: AngryComponent;
  let fixture: ComponentFixture<AngryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngryComponent]
    });
    fixture = TestBed.createComponent(AngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
