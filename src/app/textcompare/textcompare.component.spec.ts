import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcompareComponent } from './textcompare.component';

describe('TextcompareComponent', () => {
  let component: TextcompareComponent;
  let fixture: ComponentFixture<TextcompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextcompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
