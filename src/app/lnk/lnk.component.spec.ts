import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LnkComponent } from './lnk.component';

describe('LnkComponent', () => {
  let component: LnkComponent;
  let fixture: ComponentFixture<LnkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LnkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
