import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../core/model";
import {PessoasService} from "../pessoas.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {ToastyService} from "ng2-toasty";
import {FormControl} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoasService,
    private errorHandle: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    const codigoPessoa = this.route.snapshot.params['codigo'];

    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }


    this.title.setTitle('Cadastro de pessoas');
  }

  get editando() {
    return Boolean(this.pessoa.id);
  }

  carregarPessoa(id: number) {
    this.pessoaService.buscarPeloId(id)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      })
      .catch(error => this.errorHandle.handle(error));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizar(form);
      this.atualizarTituloEdicao();
    } else {
      this.adicionarPessoa(form);
    }
  }

  atualizar(form: FormControl){
    this.pessoaService.atualizar(this.pessoa)
      .then(() => {
        this.toasty.success('Pessoa atualizada com sucesso!');
      })
      .catch(error => this.errorHandle.handle(error));
  }

  adicionarPessoa(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
      .then( () => {
        this.toasty.success('Pessoa cadastrada com sucesso!');

        form.reset();

        this.pessoa = new Pessoa();
      })
      .catch(error => this.errorHandle.handle(error));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

}
