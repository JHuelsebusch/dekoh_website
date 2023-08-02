import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { LnkComponent } from './lnk/lnk.component';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
import { ShopUrlService } from './shop-url.service';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent,
    LnkComponent,
    StartComponent,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShopUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
