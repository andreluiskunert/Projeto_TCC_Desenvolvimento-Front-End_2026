import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LivroService } from '../../services/livro';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-listar-livros',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-livros.html'
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.listar().subscribe((dados: Livro[]) => {
      this.livros = dados;
    });
  }

  excluir(id: string) {
    this.livroService.excluir(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}
