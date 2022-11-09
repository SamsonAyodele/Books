import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name : string = 'Clean Code in Angular'
  author : string = 'Samson Ayodele'
  src : string = 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg'

  name2 : string = 'Clean Code in C#'
  author2 : string = 'Ikenna Ogbona'
  src2: string = 'https://m.media-amazon.com/images/I/41aXRMhToeL._SX404_BO1,204,203,200_.jpg'

  name3 : string = 'Clean Code in Angular'
  author3 : string = 'Samson Ayodele'
  src3 : string = 'https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg'

  name4 : string = 'Clean Code in C#'
  author4 : string = 'Ikenna Ogbona'
  src4 : string = 'https://m.media-amazon.com/images/I/41aXRMhToeL._SX404_BO1,204,203,200_.jpg'

  isDisabled : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showBooks() {
    this.isDisabled = true;
    alert("is working")
  }

}
