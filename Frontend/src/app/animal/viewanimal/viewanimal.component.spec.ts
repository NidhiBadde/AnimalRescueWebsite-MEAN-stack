import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewanimalComponent } from './viewanimal.component';

describe('ViewanimalComponent', () => {
  let component: ViewanimalComponent;
  let fixture: ComponentFixture<ViewanimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewanimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
