import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialiadesListarComponent } from './especialiades-listar.component';

describe('EspecialiadesListarComponent', () => {
  let component: EspecialiadesListarComponent;
  let fixture: ComponentFixture<EspecialiadesListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialiadesListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialiadesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
