import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementSectionComponent } from './achievement-section.component';

describe('AchievementSectionComponent', () => {
  let component: AchievementSectionComponent;
  let fixture: ComponentFixture<AchievementSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
