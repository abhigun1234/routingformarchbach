import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProerybindComponent } from './proerybind.component';

describe('ProerybindComponent', () => {
  let component: ProerybindComponent;
  let fixture: ComponentFixture<ProerybindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProerybindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProerybindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
