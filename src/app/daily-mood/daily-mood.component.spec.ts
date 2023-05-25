import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMoodComponent } from './daily-mood.component';

describe('DailyMoodComponent', () => {
  let component: DailyMoodComponent;
  let fixture: ComponentFixture<DailyMoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyMoodComponent]
    });
    fixture = TestBed.createComponent(DailyMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
