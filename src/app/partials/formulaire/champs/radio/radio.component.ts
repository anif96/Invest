import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './../../fields-interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
