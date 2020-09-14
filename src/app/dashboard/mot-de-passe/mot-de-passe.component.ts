import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/partials/formulaire/fields-interface';
import { FormulaireDynamiqueComponent } from './../../partials/formulaire/formulaire-dynamique/formulaire-dynamique.component';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent implements OnInit {
  @ViewChild(FormulaireDynamiqueComponent) form: FormulaireDynamiqueComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Mot de passe actuel",
      inputType: "password",
      name: "oldPassword",
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
      label: "Nouveau mot de passe",
      inputType: "password",
      name: "password",
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
      label: "Confirmer",
      inputType: "password",
      name: "passwordConfirm",
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
      label: "Save",
      inputType: "submit",
      classe: "btn btn-success",
      alignerContainer: true
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
