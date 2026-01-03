import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root',
})
export class LivroService {

  private apiUrl = 'http://localhost:3000/livros';

  constructor(private http: HttpClient) {}

  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }

  cadastrar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
