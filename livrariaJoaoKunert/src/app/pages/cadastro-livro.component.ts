import { Component } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.css']
})
export class CadastroLivroComponent {

  livro: Livro = {
    id: 0,
    titulo: '',
    autor: '',
    ano: 0
  };

  constructor(private livroService: LivroService) {}

  cadastrar() {
    this.livroService.adicionarLivro(this.livro);
    this.livro = { id: 0, titulo: '', autor: '', ano: 0 };
    alert('Livro cadastrado com sucesso!');
  }
}
