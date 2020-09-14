import { Component, OnInit, ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef} from '@angular/core';
import { ButtonComponent } from './../champs/button/button.component';
import { InputComponent } from './../champs/input/input.component';
import { SelectComponent } from './../champs/select/select.component';
import { DateComponent } from './../champs/date/date.component';
import { RadioComponent } from './../champs/radio/radio.component';
import { CheckboxComponent } from './../champs/checkbox/checkbox.component';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../fields-interface';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadioComponent,
  checkbox: CheckboxComponent
};
@Directive({
  selector: '[appChampsDynamique]'
})
export class ChampsDynamiqueDirective {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  
  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
                
}
