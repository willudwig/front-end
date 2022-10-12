import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ListarContatoComponent } from './listar/listar-contato.component';
import { InserirContatoComponent } from './inserir/inserir-contato.component';
import { EditarContatoComponent } from './editar/editar-contato.component';
import { ExcluirContatoComponent } from './excluir/excluir-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContatoService } from './services/contato.service';
import { VisualizarTarefaResolver } from '../tarefas/services/visualizar.tarefa.resolver';
import { FormsContatoResolver } from './services/forms-contato.resolver';
import { ContatoComponent } from './contato.component';


@NgModule({
  declarations: [
    ContatoComponent,
    ListarContatoComponent,
    InserirContatoComponent,
    EditarContatoComponent,
    ExcluirContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [
    ContatoService,
    FormsContatoResolver,
    VisualizarTarefaResolver
  ]
})
export class ContatoModule { }
