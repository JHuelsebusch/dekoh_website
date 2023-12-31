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
import { ContactComponent } from './contact/contact.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent,
    LnkComponent,
    StartComponent,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent,
    ContactComponent,
    FollowUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShopUrlService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
