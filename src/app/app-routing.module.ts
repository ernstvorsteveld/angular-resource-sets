import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceSetComponent } from './resource-set/resource-set.component';
import { ClientComponent } from './client/client.component';
import { ResourceSetEditorComponent } from './resource-set-editor/resource-set-editor.component';

const routes: Routes = [
  { path: 'resourceset', component: ResourceSetComponent },
  { path: 'client', component: ClientComponent },
  { path: 'newresourceset', component: ResourceSetEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
