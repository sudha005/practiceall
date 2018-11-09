import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycontentComponent } from './bodycontent.component';

describe('BodycontentComponent', () => {
  let component: BodycontentComponent;
  let fixture: ComponentFixture<BodycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
