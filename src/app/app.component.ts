import { Component } from '@angular/core';

import { Home } from './home/home.component';
import { AlenaNavbar } from './navbar/navbar.component';

import './app.component.css'

@Component({
  selector: 'my-app',
  template:
  `
  <div class="page-wrapper__limit">
    <alena-menu__navbar></alena-menu__navbar>
    <alena-home></alena-home>
  </div>
`
})
export class AppComponent { }