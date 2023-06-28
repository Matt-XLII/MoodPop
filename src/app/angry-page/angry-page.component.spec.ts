import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryPageComponent } from './angry-page.component';

describe('AngryPageComponent', () => {
  let component: AngryPageComponent;
  let fixture: ComponentFixture<AngryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngryPageComponent]
    });
    fixture = TestBed.createComponent(AngryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
