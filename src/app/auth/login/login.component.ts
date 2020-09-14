import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routesDefinitions } from 'src/app/partials/routes-definitions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: FormGroup;
  message = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl('', Validators.compose([Validators.required])),
    });
  }

  onSubmit(value: any) {
    var datas = JSON.stringify(value);
    this.redirection(true) // envoyer true si credentials corrects
  }

  /**
   * redirection selon l'etat de l'authentification
   * @param access affecter true si les credentials sont corrects
   */
  redirection(access: boolean) {
    if (access)
      this.router.navigate([routesDefinitions.dashboard]);
    else
      this.message = true;
  }
}
