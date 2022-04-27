import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servico/crud.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {
  formularioProdutos: FormGroup;
  elId:any;
  Produtos: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario:FormBuilder
  ) { 
    this.elId=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elId);
    this.crudService.DetalharProduto(this.elId).subscribe(
      response => {
        this.Produtos = response
        console.log(response)
        this.formularioProdutos.setValue({
          nome:response[0]['nome'],
          descricao:response[0]['descricao'],
          quantidade:response[0]['quantidade'],
          valor:response[0]['valor'],
          image:response[0]['image'],

        })
      }
    );
    this.formularioProdutos = this.formulario.group({
      nome:[''],
      descricao:[''],
      quantidade:[''],
      valor:[''],
      image:[''],
    })
  }

  ngOnInit(): void {
  }

}
