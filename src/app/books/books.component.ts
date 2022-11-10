import { Component, OnInit } from '@angular/core';
import { Book } from '../Types/Book';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[] = [
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

  isShowing : boolean = false;

  cart : Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  showBooks() {
    this.isShowing = !this.isShowing;
    // alert("is working")s
  }
// myName : string = '';
// handleInput(event: any){
//     this.myName = event.target.value;
// }

  addToCart(book: Book) {
    console.log(book);

  }

}
