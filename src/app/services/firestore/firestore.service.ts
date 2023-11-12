import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firebase: AngularFirestore
  ) { }

  create() {
    this.firebase.collection('test').add({ test: true }).then(res => console.log(res));
  }
}
