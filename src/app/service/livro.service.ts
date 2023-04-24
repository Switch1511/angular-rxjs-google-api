import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  // AIzaSyBwqzpTuihGpK2Ou3SGn7yXuG8oW5dW-Hk
  private readonly API: string = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  search(inputValue: string): Observable<LivrosResultado>{
    const params = new HttpParams().append('q', inputValue);
    return this.http.get<LivrosResultado>(this.API, { params })
      // .pipe(
      //   tap(res => console.log(res)),
      //   map(res => res.items ?? []),
      //   tap(res => console.log(res))
      // )

  }


}
