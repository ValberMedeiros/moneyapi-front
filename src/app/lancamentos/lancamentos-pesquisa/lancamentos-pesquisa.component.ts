import {Component, OnInit, ViewChild} from '@angular/core';
import {LancamentoFiltro, LancamentoService} from '../lancamento.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {ToastyService} from "ng2-toasty";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  pt: any;
  lancamentos = [];
  @ViewChild('tabelaLancamentos', {static: true}) tabelaLancamentos;

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private confimartion: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) {}

  ngOnInit(): void {
    // this.pesquisar();
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
      today: 'Hoje',
      clear: 'Limpar',
      dateFormat: 'dd/MM/yy',
      weekHeader: 'Semana'
    };

    this.title.setTitle('Pesquisa de lançamentos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.lancamentoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.lancamentos = resultado.lancamentos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any){
    this.confimartion.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.exlcuir(lancamento);
      }
    });
  }

  exlcuir( lancamento: any ){
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.tabelaLancamentos.reset();

        this.toasty.success('Lençamento excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
