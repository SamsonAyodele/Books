
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Types/Book';


@Component({
  selector: 'app-bookk',
  templateUrl: './bookk.component.html',
  styleUrls: ['./bookk.component.css']
})
export class BookkComponent implements OnInit {
  @Input() bookk : Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
      this.bookEmitter.emit(this.bookk)
  }

}
