import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwapicardsPage } from './swapicards';

@NgModule({
  declarations: [
    SwapicardsPage,
  ],
  imports: [
    IonicPageModule.forChild(SwapicardsPage),
  ],
  exports: [
    SwapicardsPage
  ]
})
export class SwapicardsPageModule {}
