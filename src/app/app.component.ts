import { Component } from '@angular/core';

import { Home } from './home/home.component';
import { AlenaNavbar } from './navbar/navbar.component';

@Component({
  selector: 'my-app',
  template: `
    <alena-menu__navbar></alena-menu__navbar>
    <alena-home></alena-home>`
})
export class AppComponent { }