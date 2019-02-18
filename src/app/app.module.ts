import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CgheaderComponent } from './cgcommon/cgheader/cgheader.component';
import { CgfooterComponent } from './cgcommon/cgfooter/cgfooter.component';
import { CghomeComponent } from './cgpages/cghome/cghome.component';
import { CggameComponent } from './cgpages/cggame/cggame.component';
import { CginstructionsComponent } from './cgpages/cginstructions/cginstructions.component';
import { CgaboutComponent } from './cgpages/cgabout/cgabout.component';

@NgModule({
  declarations: [
    AppComponent,
    CgheaderComponent,
    CgfooterComponent,
    CghomeComponent,
    CggameComponent,
    CginstructionsComponent,
    CgaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
