import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import {PessoasCadastroComponent} from './pessoas-cadastro/pessoas-cadastro.component';
import {PessoasPesquisaComponent} from './pessoas-pesquisa/pessoas-pesquisa.component';
import {SharedModule} from '../shared/shared.module';
import {PessoasRoutingModule} from "./pessoas-routing.module";



@NgModule({
  declarations: [
    PessoasCadastroComponent,
    PessoasPesquisaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    SharedModule,
    PessoasRoutingModule
  ],
  exports: [ ]
})
export class PessoasModule { }
