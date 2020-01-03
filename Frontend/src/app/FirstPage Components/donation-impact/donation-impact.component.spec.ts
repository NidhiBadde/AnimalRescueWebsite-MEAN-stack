import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationImpactComponent } from './donation-impact.component';

describe('DonationImpactComponent', () => {
  let component: DonationImpactComponent;
  let fixture: ComponentFixture<DonationImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
