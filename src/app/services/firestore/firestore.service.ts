import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firebase: AngularFirestore
  ) { }

  create(data: any, path: string, id: string) {
    const collection = this.firebase.collection(path);
    return collection.doc(id).set(data);
  }

  get(path: string, id: string) {
    const collection = this.firebase.collection(path);
    return collection.doc(id).valueChanges();
  }

  delete(path: string, id: string) {
    const collection = this.firebase.collection(path);
    return collection.doc(id).delete();
  }

  update(data: any, path: string, id: string) {
    const collection = this.firebase.collection(path);
    return collection.doc(id).update(data);
  }

  createId() {
    return this.firebase.createId();
  }

  getCollection<type>(path: string) {
    const collection = this.firebase.collection<type>(path);
    return collection.valueChanges();
  }

}
