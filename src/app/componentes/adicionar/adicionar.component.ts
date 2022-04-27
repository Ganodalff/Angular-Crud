import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servico/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  formularioProdutos: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ){ 

    this.formularioProdutos = this.formulario.group({
      nome:[''],
      descricao:[''],
      quantidade:[''],
      valor:[''],
      image:[''],
    });

  }

  ngOnInit(): void {
  }
  enviarDados():any {
    //console.log("Funfo");
    //console.log(this.formularioProdutos.value);
    this.crudService.AdicionarProduto(this.formularioProdutos.value).subscribe();
    this.router.navigateByUrl('/listar');
  }

}
