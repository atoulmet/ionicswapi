import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';
import { swService } from "./sw-service";

@IonicPage()
@Component({
  selector: 'page-swapicards',
  templateUrl: 'swapicards.html',
  providers: [swService]
})
export class SwapicardsPage {
  
  posts: any;
  constructor(public navCtrl: NavController, public http: Http, private SwService: swService) {
    this.SwService.getPeople().subscribe(p => {
                                          this.posts = p;
                                        }); 
  }
}
