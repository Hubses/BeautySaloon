import { Component } from "@angular/core";


import { AlenaNavbar } from '../navbar/navbar.component';
 // import { BhMenu } from '../menu/menu.component';
 // import { BhContent } from '../content/content.component';

// @Component({
//   selector: "bh-home",
//   template: `
//     <bh-menu></bh-menu>
//     <bh-content></bh-content>
//   `,
//   directives: [
//     BhMenu,
//     BhContent
//   ]
// })
// export class Home {
// }

@Component({
  selector:"alena-home",
  template:`
  <alena-menu__navbar></alena-menu__navbar>
  `
})
export class Home{
}
