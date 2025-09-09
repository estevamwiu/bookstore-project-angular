import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Books } from './books';

@Component({
  selector: 'app-books-component',
  standalone: false,
  templateUrl: './books-component.html',
  styleUrl: './books-component.css'
})
export class BooksComponent {

  book: Books [] = [];
  formGroupBooks: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupBooks = this.formBuilder.group({
      id : [''],
      title : [''],
      author : [''],
      year : [''],
      edition : [''],
      genre : ['']
    });
  }

  save() {
    this.book.push(this.formGroupBooks.value);
    this.formGroupBooks.reset();
  }
}
