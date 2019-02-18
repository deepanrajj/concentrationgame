import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CgheaderComponent } from './cgcommon/cgheader/cgheader.component';
import { CgfooterComponent } from './cgcommon/cgfooter/cgfooter.component';
import { CghomeComponent } from './cgpages/cghome/cghome.component';
import { CggameComponent } from './cgpages/cggame/cggame.component';

@NgModule({
  declarations: [
    AppComponent,
    CgheaderComponent,
    CgfooterComponent,
    CghomeComponent,
    CggameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
