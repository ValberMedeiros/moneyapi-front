import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../../core/model";
import {PessoasService} from "../pessoas.service";
import {ErrorHandlerService} from "../../core/error-handler.service";
import {ToastyService} from "ng2-toasty";
import {FormControl} from "@angular/forms";

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
    private toasty: ToastyService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
      .then( () => {
        this.toasty.success('Pessoa cadastrada com sucesso!');

        form.reset();

        this.pessoa = new Pessoa();
      })
      .catch(error => this.errorHandle.handle(error));
  }

}
