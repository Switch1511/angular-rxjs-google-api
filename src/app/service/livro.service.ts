import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  // AIzaSyBwqzpTuihGpK2Ou3SGn7yXuG8oW5dW-Hk
  private readonly API: string = "https://www.googleapis.com/books/v1/volumes"

  constructor(private http: HttpClient) { }

  search(inputValue: string): Observable<any>{
    const params = new HttpParams().append('q', inputValue);
    return this.http.get(this.API, { params });
  }


}
