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

  private valPassword: string
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  };

  public addUser(form: NgForm) {
    if (form.valid) {
      if (this.validateEmail(form.value.email)) {
        if (form.value.password == this.valPassword) {
          this.userService.getUserByUsername(form.value.username).subscribe(res => {
            this.userService.users = res as User[];
            console.log(this.userService.users);
            if (this.userService.users.length != 1) {
              this.userService.getUserByEmail(form.value.email).subscribe(res => {
                this.userService.users = res as User[];
                if (this.userService.users.length != 1) {
                  this.userService.addUser(form.value).subscribe(res => {
                    console.log(res);
                  });
                  toast("Guardado", 4000);
                  this.resetForm(form);
                  setTimeout(() => {
                    this.router.navigate(['signin']);
                  }, 2000);
                }
                else {
                  this.userService.selectedUser.email = '';
                  toast("Este correo ya esta siendo usado", 4000);
                }
              });
            }
            else {
              this.userService.selectedUser.username = '';
              toast("Debe usar un nombre de usuario disponible", 4000);
            }
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
