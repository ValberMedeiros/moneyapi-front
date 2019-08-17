import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {PessoasModule} from './pessoas/pessoas.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {LancamentosPesquisaComponent} from "./lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component";
import {LancamentoCadastroComponent} from "./lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import {PessoasPesquisaComponent} from "./pessoas/pessoas-pesquisa/pessoas-pesquisa.component";
import {PessoasCadastroComponent} from "./pessoas/pessoas-cadastro/pessoas-cadastro.component";
import {PaginaNaoEncontradaComponent} from "./core/pagina-nao-encontrada.component";

registerLocaleData(localePt);

const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/:codigo', component: LancamentoCadastroComponent },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/nova', component: PessoasCadastroComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    LancamentosModule,
    PessoasModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
