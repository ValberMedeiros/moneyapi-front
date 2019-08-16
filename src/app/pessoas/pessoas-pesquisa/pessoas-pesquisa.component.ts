import {Component, OnInit, ViewChild} from '@angular/core';
import {PessoaFilter, PessoasService} from '../pessoas.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {ToastyService} from "ng2-toasty";
import {ErrorHandlerService} from "../../core/error-handler.service";

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})

export class PessoasPesquisaComponent implements OnInit {
  totalRegistros = 0;
  filtro = new PessoaFilter();
  pessoas = [];
  @ViewChild('pessoasTabela', {static: true}) tabelaPessoas;

  ngOnInit(): void {  }

  constructor(
    private pessoasService: PessoasService,
    private toasty: ToastyService,
    private confimartion: ConfirmationService,
    private errorHandler: ErrorHandlerService
    ) { }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(pessoa: any) {
    this.confimartion.confirm({
      message: 'Tem certeza que deseja excluir a pessoa?',
      accept: () => {
        this.excluir(pessoa);
      }
    })
  }

  excluir(pessoa: any) {
    this.pessoasService.excluir(pessoa.id)
      .then( () => {
        this.tabelaPessoas.reset();

        this.toasty.success('Pessoa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  mudarStatus(pessoa: any): void {

    const novoStatus = !pessoa.ativo;

    this.pessoasService.mudarStatus(pessoa.id, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;

        this.toasty.success(`Pessoa ${acao} com sucesso!`);
      });
  }
}
