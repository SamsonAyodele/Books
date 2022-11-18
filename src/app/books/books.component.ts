import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../Types/Book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private bookservice : BookService) {
    this.books = this.bookservice.getbooks();
  }

  books : Book[] = []

  // isShowing : boolean = false;

  // cart : Book[] = [];

  ngOnInit(): void {

  }

  // showBooks() {
  //   this.isShowing = !this.isShowing;
  // }
// myName : string = '';
// handleInput(event: any){
//     this.myName = event.target.value;
// }

  // addToCart(book: Book) {
  //   console.log(book);
  // }

}
