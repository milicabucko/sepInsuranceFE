import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalClientComponent } from './internal-client.component';

describe('InternalClientComponent', () => {
  let component: InternalClientComponent;
  let fixture: ComponentFixture<InternalClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
