import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
@Component({
  template: `
  <h2>this is component 3</h2>
  <p>{{source}}</p>
  <div>
  optional : {{optional}}
</div>
  `
})
export class App3Component implements OnInit {
  source:string;
  optional: string;

  constructor(private _routeParams:RouteParams) {
  }

  ngOnInit():any {
    this.source = this._routeParams.get('source');
    this.optional = this._routeParams.get('optional');
  }
}
