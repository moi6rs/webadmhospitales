import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesListarComponent } from './pacientes-listar.component';

describe('PacientesListarComponent', () => {
  let component: PacientesListarComponent;
  let fixture: ComponentFixture<PacientesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
