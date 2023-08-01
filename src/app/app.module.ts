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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductComponent,
    LnkComponent,
    StartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShopUrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
