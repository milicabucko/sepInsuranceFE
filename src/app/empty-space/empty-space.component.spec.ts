import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySpaceComponent } from './empty-space.component';

describe('EmptySpaceComponent', () => {
  let component: EmptySpaceComponent;
  let fixture: ComponentFixture<EmptySpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptySpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
