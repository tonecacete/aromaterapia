import { EditarReceitaComponent } from './body/receitas/editar-receita/editar-receita.component';
import { CriarReceitaComponent } from './body/receitas/criar-receita/criar-receita.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'criarReceita', component: CriarReceitaComponent },
  { path: 'editarReceita', component: EditarReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
