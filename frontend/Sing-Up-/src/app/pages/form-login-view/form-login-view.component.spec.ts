import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoginViewComponent } from './form-login-view.component';

describe('FormLoginViewComponent', () => {
  let component: FormLoginViewComponent;
  let fixture: ComponentFixture<FormLoginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
