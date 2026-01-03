import { Injectable } from '@angular/core';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: Livro[] = [];
  private contadorId = 1;

  adicionarLivro(livro: Livro) {
    livro.id = this.contadorId++;
    this.livros.push(livro);
  }

  listarLivros(): Livro[] {
    return this.livros;
  }

  excluirLivro(id: number) {
    this.livros = this.livros.filter(l => l.id !== id);
  }
}
