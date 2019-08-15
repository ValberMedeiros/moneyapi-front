
export class Pessoa {
  id: number;
}

export class Categoria {
  id: number;
}

export class Lancamento {

  codigo: number;
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  tipo: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}
