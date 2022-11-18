import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books/books.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
// import { BooksComponent } from './books/books.component';
// import { BookkComponent } from './bookk/bookk.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    // BooksComponent,
    // BookkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    BooksModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
