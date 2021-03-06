/**
 * Created by ben on 2/18/17.
 */
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable }              from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Game} from "../entities/game.entity";

@Injectable()
export class GamesListService {
  private gameslistUrl = "http://localhost:8000/gamelist/";
  private mockId = "76561197994160252";
  private fullUrl = "";

  constructor (private http: Http) {}

  getGamesList (): Observable<Game[]> {

    this.fullUrl = this.gameslistUrl + this.mockId;

    return this.http.get(this.fullUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body.response.games || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
