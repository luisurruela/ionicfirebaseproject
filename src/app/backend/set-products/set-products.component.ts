import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-set-products',
  templateUrl: './set-products.component.html',
  styleUrls: ['./set-products.component.scss'],
})
export class SetProductsComponent  implements OnInit {

  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() { }
  
  openMenu() {
    this.menuController.toggle('main');
  }

  save() {
    console.log('saving...');
  }

}
