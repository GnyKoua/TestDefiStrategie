import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteursListeComponent } from './auteurs-liste.component';

describe('AuteursListeComponent', () => {
  let component: AuteursListeComponent;
  let fixture: ComponentFixture<AuteursListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuteursListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuteursListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
