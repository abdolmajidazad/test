import {Component} from 'angular2/core';
// import {PuzzleComponent} from './puzzle/puzzle.component'
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {App1Component} from "./app1.component";
import {App2Component} from "./app2.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
          <ul>
            <li><a [routerLink]="['Component1']">Component1</a></li>
            <li><a [routerLink]="['Component2']">Component2</a></li>
          </ul>
        </header>
        <router-outlet></router-outlet>
        
    `,
    directives : [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path : '/component-1', name:'Component1', component :App1Component,useAsDefault : true},
  {path : '/component-2', name:'Component2', component :App2Component}
])
export class AppComponent {

}
