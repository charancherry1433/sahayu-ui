import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopnavbarComponent } from './admin-topnavbar.component';

describe('AdminTopnavbarComponent', () => {
  let component: AdminTopnavbarComponent;
  let fixture: ComponentFixture<AdminTopnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTopnavbarComponent]
    });
    fixture = TestBed.createComponent(AdminTopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
