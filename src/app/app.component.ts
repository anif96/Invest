import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Invest';

  constructor(private _translate:TranslateService) {
    this._translate.setDefaultLang('fr');
    this._translate.use('fr');
 }

}
