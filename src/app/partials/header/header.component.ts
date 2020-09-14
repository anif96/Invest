import { Component, OnInit } from '@angular/core';
import { routesDefinitions } from '../routes-definitions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profil = routesDefinitions.profil;
  password = routesDefinitions.passwordUpdate;
  constructor() { }

  ngOnInit(): void {

  }

}
