import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogtrainingComponent } from './dogtraining.component';

describe('DogtrainingComponent', () => {
  let component: DogtrainingComponent;
  let fixture: ComponentFixture<DogtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
