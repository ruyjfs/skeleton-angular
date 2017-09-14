import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
