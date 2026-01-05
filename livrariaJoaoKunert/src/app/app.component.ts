import { Component } from '@angular/core';
import { CadastroLivroComponent } from './pages/cadastro-livro/cadastro-livro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CadastroLivroComponent],
  template: `<app-cadastro-livro></app-cadastro-livro>`
})
export class AppComponent {}
