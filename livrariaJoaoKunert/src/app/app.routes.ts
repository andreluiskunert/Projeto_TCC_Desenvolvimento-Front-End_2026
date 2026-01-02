import { Routes } from '@angular/router';
import { CadastroLivroComponent } from './pages/cadastro-livro/cadastro-livro';
import { ListarLivrosComponent } from './pages/listar-livros/listar-livros';

export const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroLivroComponent },
  { path: 'listar', component: ListarLivrosComponent }
];
