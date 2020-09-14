import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/partials/formulaire/fields-interface';
import { FormulaireDynamiqueComponent } from './../../partials/formulaire/formulaire-dynamique/formulaire-dynamique.component';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  @ViewChild(FormulaireDynamiqueComponent) form: FormulaireDynamiqueComponent;
  projetConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Nom du Projet ",
      inputType: "text",
      name: "NomProjet",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Champ obligatoire"
        }
      ]
    },
    {
      type: "input",
      label: "Descriptif du Projet",
      inputType: "text",
      name: "DescProjet",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Champ obligatoire"
        },
        {
          name: "minlength",
          validator: Validators.minLength(6),
          message: "Au moins 6 caractères"
        }
      ]
    },
    {
      type: "input",
      label: "Estimation Capital",
      inputType: "text",
      name: "EstimeCapital",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Champ obligatoire"
        }
      ]
    },

    {
      type: "input",
      label: "Lieu d'implantation",
      inputType: "text",
      name: "LieuImplantation",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Champ obligatoire"
        }
      ]
    },


    
    {
      type: "button",
      label: "Annuler",
      inputType: "button",
      classe: "btn btn-primary",
      alignerContainer: true
    },
    {
      type: "button",
      label: "Valider",
      inputType: "submit",
      classe: "btn btn-success",
      alignerContainer: true
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
