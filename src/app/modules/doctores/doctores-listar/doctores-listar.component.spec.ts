import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresListarComponent } from './doctores-listar.component';

describe('DoctoresListarComponent', () => {
  let component: DoctoresListarComponent;
  let fixture: ComponentFixture<DoctoresListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
