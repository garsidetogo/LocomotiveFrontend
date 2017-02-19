"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var gameslist_service_1 = require("./services/gameslist.service");
var AppComponent = (function () {
    function AppComponent(gameslistService) {
        this.gameslistService = gameslistService;
        this.name = 'Angular';
    }
    AppComponent.prototype.ngOnInit = function () { this.getGamesList(); };
    AppComponent.prototype.getGamesList = function () {
        var _this = this;
        this.gameslistService.getGamesList()
            .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>Hello {{name}}</h1>\n    <ul>\n      <li *ngFor=\"let game of games\">\n        {{game.name}}\n        <img src=\"http://media.steampowered.com/steamcommunity/public/images/apps/{{game.appid}}/{{game.img_icon_url}}.jpg\" />\n        <img src=\"http://media.steampowered.com/steamcommunity/public/images/apps/{{game.appid}}/{{game.img_logo_url}}.jpg\" />\n      </li>\n    </ul>\n",
        }), 
        __metadata('design:paramtypes', [gameslist_service_1.GamesListService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map