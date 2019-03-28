import { AlertaListService } from './alerta-list/alerta-list.service';
import { AlertaListComponent } from './alerta-list/alerta-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaMensagemComponent } from './alerta-mensagem/alerta-mensagem.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AlertaMensagemComponent,
        AlertaListComponent
    ],
    exports: [
        AlertaMensagemComponent,
        AlertaListComponent
    ],
    providers: [
        AlertaListService
    ]
})
export class AlertaModule {

}