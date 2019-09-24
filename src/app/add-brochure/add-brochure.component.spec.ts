import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrochureComponent } from './add-brochure.component';

describe('AddBrochureComponent', () => {
  let component: AddBrochureComponent;
  let fixture: ComponentFixture<AddBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
