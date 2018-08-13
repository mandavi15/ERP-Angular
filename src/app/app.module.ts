import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HRFormComponent } from './components/hr-form/hr-form.component';

const routes: Routes = [
  { path:'', component: HRFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HRFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
