import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredPageComponent } from './bored-page.component';

describe('BoredPageComponent', () => {
  let component: BoredPageComponent;
  let fixture: ComponentFixture<BoredPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoredPageComponent]
    });
    fixture = TestBed.createComponent(BoredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
