import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Books } from './books';
import { BookService } from '../book-service';

@Component({
  selector: 'app-books-component',
  standalone: false,
  templateUrl: './books-component.html',
  styleUrl: './books-component.css'
})

export class BooksComponent implements OnInit { 

  book: Books[] = [];
  formGroupBooks: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: BookService) { 

    this.formGroupBooks = formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      year: [''],
      edition: [''],
      genre: ['']
    });
  }
  ngOnInit(): void { 
    this.service.getAllBooks().subscribe(
      {
        next: json => this.book = json
      }
    );
  }
  
save() {

    this.service.save(this.formGroupBooks.value).subscribe({
        next: json => {
                        this.book.push(json);
                        this.formGroupBooks.reset();
                      }
      }
    )
  }
}
