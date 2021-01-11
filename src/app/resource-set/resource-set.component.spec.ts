import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSetComponent } from './resource-set.component';

describe('ResourceSetComponent', () => {
  let component: ResourceSetComponent;
  let fixture: ComponentFixture<ResourceSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
