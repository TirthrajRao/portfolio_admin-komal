import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogoDesignComponent } from './add-logo-design.component';

describe('AddLogoDesignComponent', () => {
  let component: AddLogoDesignComponent;
  let fixture: ComponentFixture<AddLogoDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogoDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogoDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
