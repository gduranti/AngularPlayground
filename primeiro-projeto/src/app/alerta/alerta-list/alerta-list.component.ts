import { AlertaListService } from './alerta-list.service';
import { Component, OnInit } from '@angular/core';

import { AlertaType } from './../type/alerta.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-alerta-list',
    templateUrl: './alerta-list.component.html',
    styleUrls: ['./alerta-list.component.css']
})
export class AlertaListComponent implements OnInit {

    alertas: AlertaType[];
    etapas: string[];

    constructor(service:AlertaListService) {
      service.getAlertas().subscribe(
        alertas => this.configuraAlertas(alertas),
        error => console.log(error)
      );        
    }

    ngOnInit() {
    }

    configuraAlertas(alertas) {
      this.alertas = alertas;
    }
  
}
