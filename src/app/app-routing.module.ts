import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LnkComponent } from './lnk/lnk.component';
import { StartComponent } from './start/start.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'lnk', component: LnkComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
