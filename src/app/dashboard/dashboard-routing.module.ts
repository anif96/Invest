import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { routesDefinitions } from '../partials/routes-definitions';
import { ProfilComponent } from './profil/profil.component';
import { MotDePasseComponent } from './mot-de-passe/mot-de-passe.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetListComponent } from './projet/projet-list/projet-list.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo:'home',
  //   // pathMatch: 'full'
  // },
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: routesDefinitions.profil,
        component: ProfilComponent,
      },
      {
        path: routesDefinitions.passwordUpdate,
        component: MotDePasseComponent,
      },

      {
        path: routesDefinitions.projet,
        component: ProjetComponent,
      },

      {
        path: routesDefinitions.ProjetList,
        component: ProjetListComponent,
      },


     
      
      
      
      {
        path: routesDefinitions.gestionUsers,
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
