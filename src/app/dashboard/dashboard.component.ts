import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  constructor(private _translate:TranslateService) {
    this._translate.setDefaultLang('fr');
    this._translate.use('fr');
 }

  ngOnInit(): void {
  }

}
