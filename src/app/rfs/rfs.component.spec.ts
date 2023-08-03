import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfsComponent } from './rfs.component';

describe('RfsComponent', () => {
  let component: RfsComponent;
  let fixture: ComponentFixture<RfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RfsComponent]
    });
    fixture = TestBed.createComponent(RfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
