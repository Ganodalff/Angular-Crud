import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { DetalharComponent } from './componentes/detalhar/detalhar.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'listar', component:ListarComponent},
  {path: 'login', component:LoginComponent},
  {path: 'detalhar/:id', component:DetalharComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
