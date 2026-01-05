// src/app/services/livro.service.ts
import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[] = [];
  private contadorId = 1;

  listar() {
    return this.livros;
  }

  adicionar(livro: Livro) {
    livro.id = this.contadorId++;
    this.livros.push(livro);
  }

  excluir(id: number) {
    this.livros = this.livros.filter(l => l.id !== id);
  }
}
