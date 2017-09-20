import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../../_animations/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
