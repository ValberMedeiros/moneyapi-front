import { Injectable } from '@angular/core';
import {ToastyService} from "ng2-toasty";
import {AuthHttpError} from "angular2-jwt";
import {Router} from "@angular/router";
import {NotAuthenticatedError} from "../seguranca/money-http-interceptor";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toasty: ToastyService,
    private router: Router
    ) {}

  handle(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse.erro === 'Sessão expirada') {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['login']);
    } else if (errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';
      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }
      try {
        msg = errorResponse.error[0].mensagemUsuario;
      } catch (e) { }
      console.log('Ocorreu um erro', errorResponse);
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(msg);
  }

}
