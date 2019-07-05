import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input()
  mensagemSucesso: string;
  
  @Input()
  mensagensErro: string[] = [];

  closeErros() {
    this.mensagensErro = [];
  }

  closeSucesso() {
    this.mensagemSucesso = undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
