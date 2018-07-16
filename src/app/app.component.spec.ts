import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeaderCmpComponent } from './header-cmp/header-cmp.component';
import { ContentCmpComponent } from './content-cmp/content-cmp.component';
import { SolutionCmpComponent } from './solution-cmp/solution-cmp.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule],
      declarations: [
        AppComponent,
        HeaderCmpComponent,
        ContentCmpComponent,
        SolutionCmpComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
