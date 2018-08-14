import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HrFormComponent } from './hr/hr-form/hr-form.component';
import { HrGridComponent } from './hr/hr-grid/hr-grid.component';

const appRoutes: Routes = [
  { path: 'hr-form', component: HrFormComponent },
  { path: 'sidebar', component: SideNavComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HrFormComponent,
    HrGridComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
