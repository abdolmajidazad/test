import {Component} from "angular2/core";
import {Router} from "angular2/router";
@Component({
  template : `
    <h2>this is component 4</h2>
    <button (click)="onNavigateApp4()">goTo component 3 </button>
  `
})
export class App4Component{
  constructor(private _router : Router){}
  onNavigateApp4(){
    this._router.navigate(['Component3', {source : "this_is_from_component_4"}])
  }
}
