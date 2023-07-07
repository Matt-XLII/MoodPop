import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsMensuellesComponent } from './stats-mensuelles.component';

describe('StatsMensuellesComponent', () => {
  let component: StatsMensuellesComponent;
  let fixture: ComponentFixture<StatsMensuellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatsMensuellesComponent]
    });
    fixture = TestBed.createComponent(StatsMensuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
