import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './services/endereco.service';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    EnderecoService
  ]

})
export class EnderecoModule { }
