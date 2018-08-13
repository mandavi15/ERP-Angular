import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HRFormComponent } from './components/hr-form/hr-form.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'', component: HRFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HRFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
