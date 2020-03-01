import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduwebMainComponent } from './eduweb-main.component';

describe('EduwebMainComponent', () => {
  let component: EduwebMainComponent;
  let fixture: ComponentFixture<EduwebMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduwebMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduwebMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
