import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from './books-component/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  apiUrl = "http://localhost:3000/books";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(this.apiUrl);
  }
  save(book: Books): Observable<Books> {
    return this.http.post<Books>(this.apiUrl, book);
  }

}
