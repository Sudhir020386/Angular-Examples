import { ActorService } from './services/actor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';


@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    PipedemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
