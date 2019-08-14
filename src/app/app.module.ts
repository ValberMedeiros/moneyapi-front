import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {LancamentoService} from './lancamentos/lancamento.service';
import {PessoasService} from './pessoas/pessoas.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule,

    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [
    LancamentoService,
    PessoasService,
    ConfirmationService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
