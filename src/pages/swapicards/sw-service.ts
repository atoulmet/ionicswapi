import { Injectable } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { Http, Response }    from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class swService {
    swapiUrl = 'http://swapi.co/api/people/'; 

    constructor(private http: Http) { }
    
    getPeople(): Observable<Response> {
        return this.http.get(`${this.swapiUrl}`)
        .map(d => d.json())
        .map(d => d.results)
            }
    }

