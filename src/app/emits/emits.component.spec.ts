import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitsComponent } from './emits.component';

describe('EmitsComponent', () => {
  let component: EmitsComponent;
  let fixture: ComponentFixture<EmitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
