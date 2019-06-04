import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSectionComponent } from './publication-section.component';

describe('PublicationSectionComponent', () => {
  let component: PublicationSectionComponent;
  let fixture: ComponentFixture<PublicationSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
