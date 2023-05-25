import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyFactComponent } from './daily-fact.component';

describe('DailyFactComponent', () => {
  let component: DailyFactComponent;
  let fixture: ComponentFixture<DailyFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyFactComponent]
    });
    fixture = TestBed.createComponent(DailyFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
