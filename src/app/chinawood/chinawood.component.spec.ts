import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinawoodComponent } from './chinawood.component';

describe('ChinawoodComponent', () => {
  let component: ChinawoodComponent;
  let fixture: ComponentFixture<ChinawoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinawoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinawoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
