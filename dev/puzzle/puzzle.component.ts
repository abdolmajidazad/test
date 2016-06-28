import {Component} from 'angular2/core'
@Component({
  selector : 'my-puzzle',
  template : `
      <section class="setup"> 
      <h2>Game Setup</h2>
        Enter Your name please : 
          <input type="text" #name (keyup)="0">
          
      
      </section>
      <section
       [ngClass] = "{puzzle : true}"
       [ngStyle] ="{display : name.value === '' ? 'none' : 'block'}"
       > 
        <h1>The Puzzle</h1> 
        <p>Ok, welCome <span class="name">XXX</span></p>
        <br>
        Switch 1:
        <input type="text" #switch1><br>
        Switch 2:
        <input type="text" #switch2><br>
        Switch 3:
        <input type="text" #switch3><br>
        Switch 4:
        <input type="text" #switch4><br>
      </section>
      <h2>Congratulations XXX , you did it!</h2>

  `
})
export class PuzzleComponent{
  switch1Number  : number;
  switch2Number  : number;
  switch3Number  : number;
  switch4Number  : number;

}
