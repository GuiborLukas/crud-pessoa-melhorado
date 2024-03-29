import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from 'src/app/cidade/services/cidade.service';
import { Cidade, Endereco } from 'src/app/shared';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {

  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;
  cidades: Cidade[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cidades = this.cidadeService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorId(id);
    if (res !== undefined)
      this.endereco = res;
    else
      throw new Error("Endereco não encontrada: id = " + id);
  }

  atualizar(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
