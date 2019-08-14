import { Component, OnInit } from '@angular/core';
import {CategoriasService} from "../../categorias/categorias.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {PessoasService} from "../../pessoas/pessoas.service";

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  constructor(
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoasService: PessoasService
  ) { }

  pt: any;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];

  pessoas = [];

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Maio", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/MM/yy',
      weekHeader: 'Semana'
    };

    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias.map(c => ({ label: c.nome, value: c.id }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas(){
    return this.pessoasService.listarTodas()
      .then( pessoas => {
        this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.id}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
