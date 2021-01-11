import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-resource-set-editor',
  templateUrl: './resource-set-editor.component.html',
  styleUrls: ['./resource-set-editor.component.css']
})
export class ResourceSetEditorComponent implements OnInit {

  resourceSetForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    icon_url: new FormControl('',[Validators.pattern("[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)")])
  });

  constructor() { }

  ngOnInit(): void {
  }

  createResourceSet() {
    console.warn("CreateResourceSet:", this.resourceSetForm.value);
  }

  onSubmit() {
    console.warn("About to submit:", this.resourceSetForm.value);
  }

}
