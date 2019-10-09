import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { ContentCmpComponent } from './content-cmp/content-cmp.component';
// import { SolutionCmpComponent } from './solution-cmp/solution-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCmpComponent,
    ContentCmpComponent,
    // SolutionCmpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
