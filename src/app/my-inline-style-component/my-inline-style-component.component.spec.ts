import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInlineStyleComponentComponent } from './my-inline-style-component.component';

describe('MyInlineStyleComponentComponent', () => {
  let component: MyInlineStyleComponentComponent;
  let fixture: ComponentFixture<MyInlineStyleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInlineStyleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyInlineStyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
