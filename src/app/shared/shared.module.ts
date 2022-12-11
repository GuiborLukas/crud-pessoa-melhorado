import { NgModule } from '@angular/core';

import { NumericoDirective, MinimoValidatorDirective } from './directives';

import { MeuPipePipe } from './pipes';

@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ]
})
export class SharedModule { }
