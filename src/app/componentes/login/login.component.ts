import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CrudService } from 'src/app/servico/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  FormularioLogin: FormGroup;


  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private router:Router
  ) {

    this.FormularioLogin = this.formulario.group({
      email:[''],
      senha:[''],
    });

   }

  ngOnInit(): void {
  }

  enviarDados():any {
    //console.log(this.FormularioLogin.value);
    this.crudService.LogarUser(this.FormularioLogin.value).subscribe(response => {
      if(response === 'error'){
        alert("Login ou senha Incorretos");
      }else{
        this.router.navigateByUrl('/listar');
      }
    });
  }

}
