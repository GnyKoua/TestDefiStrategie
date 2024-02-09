import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteursDetailsComponent } from './auteurs-details.component';

describe('AuteursDetailsComponent', () => {
  let component: AuteursDetailsComponent;
  let fixture: ComponentFixture<AuteursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuteursDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuteursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
