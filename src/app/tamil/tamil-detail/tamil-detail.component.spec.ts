import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilDetailComponent } from './tamil-detail.component';

describe('TamilDetailComponent', () => {
  let component: TamilDetailComponent;
  let fixture: ComponentFixture<TamilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
