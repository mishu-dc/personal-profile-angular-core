import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSectionComponent } from './certification-section.component';

describe('CertificationSectionComponent', () => {
  let component: CertificationSectionComponent;
  let fixture: ComponentFixture<CertificationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
