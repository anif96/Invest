import { NgModule } from '@angular/core';
import { DashboardComponent} from './dashboard.component';
import { HeaderComponent } from '../partials/header/header.component';
import { SidebarComponent } from '../partials/sidebar/sidebar.component';
import { ClarityModule, ClrCommonFormsModule, ClrFormsModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from '../services/http-loader-factory.service';
import { ProfilComponent } from './profil/profil.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { ButtonComponent } from '../partials/formulaire/champs/button/button.component';
import { CheckboxComponent } from '../partials/formulaire/champs/checkbox/checkbox.component';
import { DateComponent } from '../partials/formulaire/champs/date/date.component';
import { RadioComponent } from '../partials/formulaire/champs/radio/radio.component';
import { InputComponent } from '../partials/formulaire/champs/input/input.component';
import { SelectComponent } from '../partials/formulaire/champs/select/select.component';
import { FormulaireDynamiqueComponent } from '../partials/formulaire/formulaire-dynamique/formulaire-dynamique.component';
import { ChampsDynamiqueDirective } from './../partials/formulaire/champs-dynamique/champs-dynamique.directive';
import { CommonModule } from '@angular/common';
import { ProjetComponent } from './projet/projet.component';
import { DroitComponent } from './droit/droit.component';
import { UsersComponent } from './users/users.component';
import { InvestisseurComponent } from './users/investisseur/investisseur.component';
import { SouscriptionComponent } from './souscription/souscription.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContratComponent } from './contrat/contrat.component';
import { EntrepreneurComponent } from './users/entrepreneur/entrepreneur.component';
import { ProjetListComponent } from './projet/projet-list/projet-list.component'; 


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ProfilComponent,
    MotDePasseComponent,
    ChampsDynamiqueDirective,
    FormulaireDynamiqueComponent,
    ProjetComponent,
    DroitComponent,
    UsersComponent,
    InvestisseurComponent,
    SouscriptionComponent,
    AbonnementComponent,
    TransactionComponent,
    ContratComponent,
    EntrepreneurComponent,
    ProjetListComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ClrCommonFormsModule,
    ClrFormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [HttpClient]
      }
    }),
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent
  ]
})
export class DashboardModule { }
