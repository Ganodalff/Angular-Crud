import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Produto} from './Produto';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/API/'
  constructor(private clientHttp: HttpClient) {}

  AdicionarProduto(dadosProduto:Produto):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",dadosProduto);
  }

  ObterProduto(){
    return this.clientHttp.get(this.API);
  }
  
  ExcluirProduto(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  DetalharProduto(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }

  LogarUser(dados:Users):Observable<any>{
    return this.clientHttp.post(this.API+"?logar",dados);
  }
}
