import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDownloadConfimationComponent } from './dialog-download-confimation.component';

describe('DialogDownloadConfimationComponent', () => {
  let component: DialogDownloadConfimationComponent;
  let fixture: ComponentFixture<DialogDownloadConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDownloadConfimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDownloadConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
