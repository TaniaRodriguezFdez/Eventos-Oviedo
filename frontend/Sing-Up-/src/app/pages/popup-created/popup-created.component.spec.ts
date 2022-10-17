import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreatedComponent } from './popup-created.component';

describe('PopupCreatedComponent', () => {
  let component: PopupCreatedComponent;
  let fixture: ComponentFixture<PopupCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
