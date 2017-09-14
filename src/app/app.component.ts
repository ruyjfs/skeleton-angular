import { Component } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInAnimation
  ],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  title = 'App';
}
