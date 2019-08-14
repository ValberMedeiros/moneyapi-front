import { Injectable } from '@angular/core';
import {ToastyService} from "ng2-toasty";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor( private toasty: ToastyService) {}

  handle(errorResponse: any) {
    let msg: string;

    if(errorResponse === 'string'){
      msg = errorResponse;
    } else if(errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = errorResponse.error[0].mensagemUsuario;
      console.log('Ocorreu um erro', errorResponse);
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }

    this.toasty.error(msg);
  }

}
