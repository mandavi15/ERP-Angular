import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HrFormComponent } from './hr/hr-form/hr-form.component';
import { HrGridComponent } from './hr/hr-grid/hr-grid.component';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SaleComponent } from './sale/sale.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductionComponent } from './production/production.component';
import { FixedAssetsComponent } from './fixed-assets/fixed-assets.component';
import { PayrollComponent } from './payroll/payroll.component';

const appRoutes: Routes = [
  { path: 'purchase', component: PurchaseComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'general-ledger', component: GeneralLedgerComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'production', component: ProductionComponent },
  { path: 'fixed-assets', component: FixedAssetsComponent },
  { path: 'pay-roll', component: PayrollComponent },
  { path: 'hr-form', component: HrFormComponent },
  { path: '', component: HomeComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HrFormComponent,
    HrGridComponent,
    HomeComponent,
    PurchaseComponent,
    SaleComponent,
    GeneralLedgerComponent,
    InventoryComponent,
    ProductionComponent,
    FixedAssetsComponent,
    PayrollComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
