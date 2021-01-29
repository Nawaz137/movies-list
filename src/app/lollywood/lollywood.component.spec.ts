import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LollywoodComponent } from './lollywood.component';

describe('LollywoodComponent', () => {
  let component: LollywoodComponent;
  let fixture: ComponentFixture<LollywoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LollywoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LollywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
