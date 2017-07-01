import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';

/**
 * Generated class for the InstaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-insta',
  templateUrl: 'insta.html',
})
export class InstaPage {
authurl = 'https://www.instagram.com/ale.xiya/media/'; 
all: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) { 
        this.http.get(`${this.authurl}`)
        .map(d => d.json())
        .map(d => d.items)
        .subscribe(p => { this.all = p; console.log(p)})
  }
}
