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
/**
 * Created by ben on 2/18/17.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var GamesListService = (function () {
    function GamesListService(http) {
        this.http = http;
        this.gameslistUrl = "http://localhost:8000/gamelist/";
        this.mockId = "76561197994160252";
        this.fullUrl = "";
    }
    GamesListService.prototype.getGamesList = function () {
        this.fullUrl = this.gameslistUrl + this.mockId;
        return this.http.get(this.fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GamesListService.prototype.extractData = function (res) {
        var body = res.json();
        return body.response.games || {};
    };
    GamesListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    GamesListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GamesListService);
    return GamesListService;
}());
exports.GamesListService = GamesListService;
//# sourceMappingURL=gameslist.service.js.map