import { CartService } from './../cart.service';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Types/Book';


@Component({
  selector: 'app-bookk',
  templateUrl: './bookk.component.html',
  styleUrls: ['./bookk.component.css']
})
export class BookkComponent implements OnInit {
  @Input() bookk : Book = {} as Book;
  // @Output() bookEmitter = new EventEmitter<Book>();
  inCart: boolean = false;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.inCart = true;
    this.cartService.add(this.bookk)
      // this.bookEmitter.emit(this.bookk)
  }

  removeFromCart(){
    this.inCart = false;
    this.cartService.remove(this.bookk)
  }



}
