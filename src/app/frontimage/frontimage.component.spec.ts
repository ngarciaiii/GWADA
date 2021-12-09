import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontimageComponent } from './frontimage.component';

describe('FrontimageComponent', () => {
  let component: FrontimageComponent;
  let fixture: ComponentFixture<FrontimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
