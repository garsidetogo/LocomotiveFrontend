import {Component, OnInit} from '@angular/core';
import {GamesListService} from "./services/gameslist.service";

import {Game} from "./entities/game.entity";

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <ul>
      <li *ngFor="let game of games">{{game.appid}}</li>
    </ul>
`,
})
export class AppComponent implements OnInit
{

  games: Game[];
  errorMessage: string;

  constructor (private gameslistService: GamesListService) {}

  ngOnInit() { this.getGamesList(); }

  getGamesList() {
    this.gameslistService.getGamesList()
      .subscribe(
        games => this.games = games,
        error =>  this.errorMessage = <any>error);
  }

  name = 'Angular';
}
