import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEventCreatedComponent } from './popup-event-created.component';

describe('PopupEventCreatedComponent', () => {
  let component: PopupEventCreatedComponent;
  let fixture: ComponentFixture<PopupEventCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEventCreatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEventCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
