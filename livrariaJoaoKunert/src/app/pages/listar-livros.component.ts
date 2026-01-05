import { Component } from '@angular/core';
import { LivroService } from '../services/livro.service';
import { Livro } from '../models/livro.model';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.livros = this.livroService.listarLivros();
  }

  excluir(id: number) {
    this.livroService.excluirLivro(id);
    this.livros = this.livroService.listarLivros();
  }
}
