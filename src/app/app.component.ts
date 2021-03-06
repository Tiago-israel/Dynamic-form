import { Component, OnInit, ViewChild } from '@angular/core';
import { modelForm } from './form/models/model-form';
import { Input } from './form/models/input';
import { FormComponent } from './form/form.component';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('form') form: FormComponent;
  title = 'dynamic-form';
  public modelForm = new modelForm();
  public input: Input = new Input();
  public funcoes: Funcao[] = [];

  public pessoa = new Pessoa();

  ngOnInit(): void {
    this.modelForm.submit = { valor: "salvar", cssClass: 'btn btn-default', submitFunction: () => console.log(this.pessoa) };
    this.modelForm.model = this.pessoa;
  }

  addInput() {
    this.funcoes.forEach(f => {
      const func = new Function(`return ${f.funcao.trim()}`).bind(this);
      this.input.eventos.push({ nome: f.tipo, funcao: func() });
    });


    this.modelForm.inputs.push({ ...this.input });
    this.input = new Input();
    this.funcoes = [];
    this.form.ngAfterViewInit();

  }

  addFuncao() {
    this.funcoes.push({ tipo: '', funcao: '' });
  }

}

class Funcao {
  public tipo: string;
  public funcao: string;
}
