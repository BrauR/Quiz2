import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelePage } from './tele';

@NgModule({
  declarations: [
    TelePage,
  ],
  imports: [
    IonicPageModule.forChild(TelePage),
  ],
})
export class TelePageModule {}
