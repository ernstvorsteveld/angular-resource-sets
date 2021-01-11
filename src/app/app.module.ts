import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientComponent } from './client/client.component';
import { ResourceSetComponent } from './resource-set/resource-set.component';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { ResourceSetEditorComponent } from './resource-set-editor/resource-set-editor.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ResourceSetComponent,
    CardMenuComponent,
    ResourceSetEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
