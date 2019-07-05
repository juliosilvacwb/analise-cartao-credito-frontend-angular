import { Component, OnInit } from '@angular/core';
import { PropostaCreditoService } from '../../services/proposta.credito.service';
import { PropostaCredito } from '../../models/proposta.credito.model';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  mascaraCpf = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  cpf: string;
  propostas: PropostaCredito[];
  cliente: Cliente;

  mensagemSucesso: string;
  mensagensErro: string[];

  constructor(private propostaCreditoService: PropostaCreditoService) { }

  ngOnInit() {
    this.reset();
    this.limparMensagens();
  }


  buscar() {
    this.limparMensagens();
    this.propostaCreditoService.consultar(this.cpf).subscribe(response => {
      if(response.status == 204) {
        this.reset();
        this.mensagensErro = ['Nenhuma proposta encontrada para o CPF informado.'];
      } else {
        this.propostas = response.body;
        this.cliente = this.propostas[0].cliente;
      }
    },
    response => {
      if(response.error && response.error.erros) {
        this.mensagensErro = response.error.erros;
      } else {
        this.mensagensErro = [response.error.message];
      }
      window.scroll(0, 0)
    })
  }

  limparMensagens() {
    this.mensagemSucesso = undefined;
    this.mensagensErro = [];
  }

  reset() {
    this.propostas = [];
    this.cliente = new Cliente;
  }

}
