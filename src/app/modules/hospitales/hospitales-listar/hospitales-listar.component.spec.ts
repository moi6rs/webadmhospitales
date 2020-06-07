import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesListarComponent } from './hospitales-listar.component';

describe('HospitalesListarComponent', () => {
  let component: HospitalesListarComponent;
  let fixture: ComponentFixture<HospitalesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
