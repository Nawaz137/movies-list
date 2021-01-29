import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilListComponent } from './tamil-list.component';

describe('TamilListComponent', () => {
  let component: TamilListComponent;
  let fixture: ComponentFixture<TamilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
