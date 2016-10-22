import { Component } from '@angular/core';

@Component({
  selector: 'top-bar',
  template: `
    <div style="border:1px solid grey;"><h1>{{title}}</h1></div>
    <div><ul>
      <li><a [routerLink]="['/']">Home</a></li>
      <li><a [routerLink]="['/stats']">Stats</a></li>
  `
})
export class TopBarComponent {
  title = 'app works!';
}
