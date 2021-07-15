import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobPostComponent } from './update-job-post.component';

describe('UpdateJobPostComponent', () => {
  let component: UpdateJobPostComponent;
  let fixture: ComponentFixture<UpdateJobPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJobPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
