import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEachComponent } from './animal-each.component';

describe('AnimalEachComponent', () => {
  let component: AnimalEachComponent;
  let fixture: ComponentFixture<AnimalEachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalEachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
