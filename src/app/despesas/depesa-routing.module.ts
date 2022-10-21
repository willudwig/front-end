import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { DespesaComponent } from './despesa.component';
import { ListarDespesasComponent } from './listar/listar-despesas.component';

const routes: Routes = [
  {
    path: '',
    component: DespesaComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full'
      },
      {
        path: 'listar',
        component: ListarDespesasComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepesaRoutingModule { }
