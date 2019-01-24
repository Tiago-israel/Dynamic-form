import { Component, OnInit, Input, AfterContentInit, AfterViewInit, OnChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { modelForm } from './models/model-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit, AfterViewChecked {


  @Input('data') data: modelForm = new modelForm();

  constructor() { }

  ngAfterViewInit(): void {
    this.data.inputs.forEach(input => {
      input.eventos.forEach(evento => {
        document.getElementById(input.id).addEventListener(evento.nome, evento.funcao);
      })
    })


  }
  ngAfterViewChecked() {
    this.data.inputs.forEach(input => {
      input.eventos.forEach(evento => {
        document.getElementById(input.id).addEventListener(evento.nome, evento.funcao);
      })
    })
  }


}
