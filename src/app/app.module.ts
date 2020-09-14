// import { Observable } from "rxjs";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from './services/http-loader-factory.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule, ClrCommonFormsModule, ClrFormsModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateComponent } from './partials/formulaire/champs/date/date.component';
import { RadioComponent } from './partials/formulaire/champs/radio/radio.component';
import { CheckboxComponent } from './partials/formulaire/champs/checkbox/checkbox.component';
import { ButtonComponent } from './partials/formulaire/champs/button/button.component';
import { InputComponent } from './partials/formulaire/champs/input/input.component';
import { SelectComponent } from './partials/formulaire/champs/select/select.component';
// import { ChampsDynamiqueDirective } from './partials/formulaire/champs-dynamique/champs-dynamique.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    // ChampsDynamiqueDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ClrCommonFormsModule,
    ClrFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient]
      }
    }),
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
