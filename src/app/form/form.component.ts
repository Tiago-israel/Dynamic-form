import { Component, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { modelForm } from './models/model-form';
import { Input as InputTag } from './models/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements AfterViewInit, AfterViewChecked {


  @Input('data') data: modelForm = new modelForm();

  constructor() { }

  ngAfterViewInit(): void {
    this.addFunctions();
  }

  ngAfterViewChecked() {
    this.addFunctions();
  }
  
  private addFunctions() {
    this.data.inputs.forEach(input => {
      input.eventos.forEach(evento => {
        const element = document.getElementById(input.id);
        if (element) element.addEventListener(evento.nome, evento.funcao);
      })
    })
  }

}
