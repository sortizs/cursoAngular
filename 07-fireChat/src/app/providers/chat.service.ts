import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from "rxjs/operators";

import { Message } from '../interfaces/message.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;

  public chats: Message[] = [ ];
  public user: any = { }

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
      console.log('User status: ', user);
      if (!user) { return; }
      this.user.name = user.displayName;
      this.user.uid = user.uid;
    });
  }

  login(provider: string) {
    if (provider === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    if (provider === 'twitter') {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.user = { };
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>(
      'chats',
      ref => ref.orderBy('date', 'desc').limit(5)
    );

    return this.itemsCollection.valueChanges()
      .pipe(
        map((messages: Message[]) => {
          console.log(messages);
          // this.chats = messages;
          this.chats = [];
          for (const message of messages) {
            this.chats.unshift(message);
          }
        })
      );
  }

  addMessage(text: string): Promise<any> {
    let message: Message = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    }

    return this.itemsCollection.add(message);
  }
}
