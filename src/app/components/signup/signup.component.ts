import { Component, OnInit } from '@angular/core';

//import para usar servicio User en componente
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

//Constante para usar algunos elementos de materialize en toda la app
import { toast } from 'angular2-materialize';

//import para lograr redirigir 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private valPassword: string;
  loading = false;
  constructor(
    private userService: UserService, private router: Router
  ) { }

  ngOnInit() {
  };

  public addUser(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      if (this.validateEmail(form.value.email)) {
        if (form.value.password == this.valPassword) {
          this.userService.addUser(form.value).subscribe(
            res => {

              this.resetForm(form);
              setTimeout(() => {
                this.router.navigate(['login']);
              }, 2000);

              toast(res.message, 4000);
            },
            error => {
              toast(error, 5000);
              this.loading = false;
            });
        }
        else {
          this.valPassword = '';
          toast("Contrasenas no coinciden", 4000);
        }
      }
      else {
        this.userService.selectedUser.email = '';
        toast("Formato de email invalido", 4000);
      }
    }
    else {
      toast("Ingrese Datos obligatorios", 4000);
    }
  };

  public resetForm(form?: NgForm) {
    //si existe el formulario
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  };

  private validateEmail(email: string): boolean {
    let serchfind: boolean;

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    serchfind = regexp.test(email);

    return serchfind;
  }

}
