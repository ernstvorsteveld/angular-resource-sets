import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSetEditorComponent } from './resource-set-editor.component';

describe('ResourceSetEditorComponent', () => {
  let component: ResourceSetEditorComponent;
  let fixture: ComponentFixture<ResourceSetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceSetEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
