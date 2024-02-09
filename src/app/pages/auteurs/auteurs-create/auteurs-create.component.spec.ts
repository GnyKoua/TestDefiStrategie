import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteursCreateComponent } from './auteurs-create.component';

describe('AuteursCreateComponent', () => {
  let component: AuteursCreateComponent;
  let fixture: ComponentFixture<AuteursCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuteursCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuteursCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
