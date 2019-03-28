import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta-mensagem',
  templateUrl: './alerta-mensagem.component.html',
  styleUrls: ['./alerta-mensagem.component.css']
})
export class AlertaMensagemComponent implements OnInit {

  mensagem: string;

  constructor() {
    this.mensagem="teste alerta 123"

   }

  ngOnInit() {
  }

}
