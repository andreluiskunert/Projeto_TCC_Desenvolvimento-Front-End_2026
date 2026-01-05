import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../services/livro.service';
import { Livro } from '../models/livro.model';


@Component({
  selector: 'app-cadastro-livro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-livro.html'
})
export class CadastroLivroComponent {

  livro: Livro = {
    titulo: '',
    autor: '',
    ano: new Date().getFullYear()
  };

  constructor(private livroService: LivroService) {}

  cadastrar() {
    this.livroService.cadastrar(this.livro).subscribe(() => {
      alert('Livro cadastrado com sucesso!');
    });
  }
}
