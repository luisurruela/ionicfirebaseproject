import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Product } from './types/product';

@Component({
  selector: 'app-set-products',
  templateUrl: './set-products.component.html',
  styleUrls: ['./set-products.component.scss'],
})
export class SetProductsComponent  implements OnInit {

  products: Product[] = [];
  newProduct: Product = {
    name: '',
    regularPrice: 0,
    lowerPrice: 0,
    photo: '',
    id: this.firestore.createId(),
    date: new Date()
  };
  newForm = false;

  private path = 'products';

  constructor(
    private menuController: MenuController,
    private firestore: FirestoreService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  createNewProduct() {
    this.newForm = true;
  }
  
  openMenu() {
    this.menuController.toggle('main');
  }

  save() {
    this.firestore.create(this.newProduct, this.path, this.newProduct.id);
    this.newForm = false;
  }

  getProducts() {
    this.firestore.getCollection<Product>(this.path).subscribe(products => {
      this.products = products;
    });
  }

  delete(product: Product) {
    this.firestore.delete(this.path, product.id);
  }

  uploadImage(event: any) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = ((image) => {
        console.log(image);
        this.newProduct.photo = image.target!.result as string;
        console.log(this.newProduct.photo);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
