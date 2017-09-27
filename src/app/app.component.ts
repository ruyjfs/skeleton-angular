import { Component } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../_animations/index';

import { ShellNoRender, ShellRender } from '@angular/app-shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [ShellNoRender, ShellRender],
  animations: [
    fadeInAnimation
  ],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
})
export class AppComponent {
  title = 'Skeleton Angular PWA';
}
