import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyPageComponent } from './happy-page.component';

describe('HappyPageComponent', () => {
  let component: HappyPageComponent;
  let fixture: ComponentFixture<HappyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyPageComponent]
    });
    fixture = TestBed.createComponent(HappyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
