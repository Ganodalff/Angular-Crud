import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servico/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  Produtos:any;

  constructor(
    private crudService:CrudService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.crudService.ObterProduto().subscribe(response=>{
      //console.log(response);
      this.Produtos=response;
    });
  }

  excluirRegistro(id:any,iControl: any){
    this.crudService.ExcluirProduto(id).subscribe(response=>{
      this.Produtos.splice(iControl,1);
    });
  }

}
