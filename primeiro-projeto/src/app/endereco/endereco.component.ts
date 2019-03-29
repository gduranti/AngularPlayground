import { EnderecoService } from './endereco.service';
import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from './endereco';
import { EnderecoCorreios } from './endereco-correios';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: Endereco;
  pesquisouPrimeiraVez: boolean = false;
  carregando: boolean = false;
  enderecoEncontrado: boolean = false;

  constructor(private enderecoService: EnderecoService) {
    this.endereco = new Endereco
  }

  ngOnInit() {
  }

  onCepChanges() {
    console.log(this.endereco.cep)

    this.limpaEndereco()
    this.carregando = true
    this.enderecoEncontrado = false
    this.pesquisouPrimeiraVez = true

    this.enderecoService.getEndereco(this.endereco.cep).subscribe(
      endereco => this.configuraEndereco(endereco),
      error => {console.log(error);this.carregando = false}
    )
  }

  limpaEndereco() {
    this.endereco.logradouro = null
    this.endereco.municipio = null
    this.endereco.uf = null
    this.endereco.bairro = null    
  }

  configuraEndereco(endereco: EnderecoCorreios) {
    console.log(endereco)

    if (endereco != null) {
      this.endereco.logradouro = endereco.logradouro
      this.endereco.municipio = endereco.localidade
      this.endereco.uf = endereco.uf
      this.endereco.bairro = endereco.bairro
      this.enderecoEncontrado = true
    }

    this.carregando = false
  }

  cepNaoEncontrado() : boolean {
    return this.pesquisouPrimeiraVez
        && !this.carregando
        && !this.enderecoEncontrado;
  }

}
