import {Component} from 'angular2/core';
// import {PuzzleComponent} from './puzzle/puzzle.component'
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {App1Component} from "./app1.component";
import {App2Component} from "./app2.component";
import {App3Component} from "./app3.component";
import {App4Component} from "./app4.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
          <ul>
            <li><a [routerLink]="['Component1']">Component1</a></li>
            <li><a [routerLink]="['Component2']">Component2</a></li>
            <li><a [routerLink]="['Component3',{source : 'AppComponent', optional : 'this is optional parameter'}]">Component3</a></li>
            <li><a [routerLink]="['Component4']">Component4</a></li>
          </ul>
        </header>
        <router-outlet></router-outlet>
        
    `,
    directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path : '/component-1', name:'Component1', component :App1Component,useAsDefault : true},
  {path : '/component-2', name:'Component2', component :App2Component},
  {path : '/component-3/:source', name:'Component3', component :App3Component},
  {path : '/component-4', name:'Component4', component :App4Component},
])
export class AppComponent {

}
