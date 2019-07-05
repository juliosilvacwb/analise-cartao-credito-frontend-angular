import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResultadoAnalise } from 'src/app/models/resultado.analise';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  resultadoAnalise: ResultadoAnalise;

  @Output()
  closeModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fechar() {
    this.closeModal.emit();
  }

}
