import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { ContentCmpComponent } from './content-cmp/content-cmp.component';
import { SolutionCmpComponent } from './solution-cmp/solution-cmp.component';
import {SolutionService} from './services/solution.service';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderCmpComponent,
    ContentCmpComponent,
    SolutionCmpComponent,
    AddDialogComponent,
    RemoveDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [SolutionService],
  entryComponents: [
    AddDialogComponent,RemoveDialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
