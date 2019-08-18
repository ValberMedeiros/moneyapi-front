import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoasService} from '../pessoas/pessoas.service';
import {RouterModule} from "@angular/router";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import {AuthService} from "../seguranca/auth.service";
import { NaoAutorizadoComponent } from './nao-autorizado.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    LancamentoService,
    PessoasService,
    ConfirmationService,
    AuthService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
