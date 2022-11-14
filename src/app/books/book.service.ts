import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  getbooks() {

    return [
      {
        name :  'Clean Code in Angular',
        author :  'Samson Ayodele',
        image :  'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 700
      },
      {
        name : 'Clean Code in C#',
        author : 'Ikenna Ogbona',
        image :  'https://m.media-amazon.com/images/I/41aXRMhToeL._SX404_BO1,204,203,200_.jpg',
        amount: 800
      },
      {
        name :  'Clean Code in Angular',
        author :  'Samson Ayodele',
        image :  'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg',
        amount: 900
      },
      {
        name : 'Clean Code in C#',
        author : 'Ikenna Ogbona',
        image :  'https://m.media-amazon.com/images/I/41aXRMhToeL._SX404_BO1,204,203,200_.jpg',
        amount: 1000
      }
    ]


  }

}
