import { Component, OnInit } from '@angular/core';
import { Estado } from '../../models/estado.model';
import { EstadosService } from '../../services/estados.service';
import { EstadoCivilService } from '../../services/estado.civil.service';
import { EstadoCivil } from '../../models/estado.civil.model';
import { PropostaCredito } from '../../models/proposta.credito.model';
import { PropostaCreditoService } from 'src/app/services/proposta.credito.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  mascaraCpf = [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  mascaraData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  
  estados: Estado[]
  estadosCivis: EstadoCivil[];

  mensagemSucesso: string;
  mensagensErro: string[] = [];

  proposta: PropostaCredito;
  mostrarModal: boolean;
  submetendo: boolean;

  constructor(
    private estadosService: EstadosService, 
    private estadoCivilService: EstadoCivilService,
    private propostaService: PropostaCreditoService
  ) { }

  ngOnInit() {
    this.estadosService.getEstados().subscribe(estados => { this.estados = estados});
    this.estadoCivilService.getEstadosCivis().subscribe(estadosCivis => { this.estadosCivis = estadosCivis});

    this.proposta = new PropostaCredito();
  }

  submeterProposta() {
    this.submetendo = true;
    this.limparMensagens();
  
    this.converterPropostaEmNovaCasoJaTenhaSidoSubmetida()

    this.propostaService.salvar(this.proposta).subscribe(
      proposta => {
        this.proposta = proposta;
        this.showModal();
        this.submetendo = false;
      }, 
      response => {
        if(response.error && response.error.erros) {
          this.mensagensErro = response.error.erros;
        } else {
          this.mensagensErro = [response.error.message];
        }
        window.scroll(0, 0)
        this.submetendo = false;
      })
  }

  converterPropostaEmNovaCasoJaTenhaSidoSubmetida() {
    this.proposta.id = undefined;
    this.proposta.versao = undefined;
    this.proposta.resultadoAnalise = undefined;
    this.proposta.cliente.id = undefined;
    this.proposta.cliente.versao = undefined;
    this.proposta.resultadoAnalise = undefined;
  }

  showModal() {
    this.mostrarModal = true;
  }

  closeModal() {
    this.mostrarModal = false;
  }

  limparMensagens() {
    this.mensagemSucesso = undefined;
    this.mensagensErro = [];
  }

}
