import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLivroComponent } from './pages/cadastro-livro.component';
import { ListarLivrosComponent } from './pages/listar-livros.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroLivroComponent },
  { path: 'listar', component: ListarLivrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
