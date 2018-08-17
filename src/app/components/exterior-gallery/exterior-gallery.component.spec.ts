import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorGalleryComponent } from './exterior-gallery.component';

describe('ExteriorGalleryComponent', () => {
  let component: ExteriorGalleryComponent;
  let fixture: ComponentFixture<ExteriorGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
