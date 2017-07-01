import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstaPage } from './insta';

@NgModule({
  declarations: [
    InstaPage,
  ],
  imports: [
    IonicPageModule.forChild(InstaPage),
  ],
  exports: [
    InstaPage
  ]
})
export class InstaPageModule {}
