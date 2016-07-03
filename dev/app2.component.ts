import {Component} from 'angular2/core';
import {Router} from "angular2/router";
@Component({
  template : `
   <h2>this is component 2 </h2>
   <button (click) = "onNavigate()">navigate to component 1 </button>
  `
})
export class App2Component{
  constructor(private _router:Router){}
  onNavigate (){
    this._router.navigate(['Component1',{source  : 'component2'}]);
  }

}
