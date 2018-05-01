import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';       // my changes : added
import { FormsModule } from '@angular/forms';   // my changes : added



import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';  // my changes : added


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent    // my changes : added
  ],
  imports: [
    BrowserModule,
    FormsModule   // my changes : added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
