import { BookkComponent } from './../../bookk/bookk.component';
import { BooksComponent } from './../books.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';



@NgModule({
  declarations: [BooksComponent, BookkComponent],
  providers: [BookService],
  imports: [CommonModule],
  exports:[BooksComponent]
})
export class BooksModule { }
