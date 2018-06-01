import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'Ricardo';

  pessoa: any = {
    nome: 'Ricardo',
    idade: 37
  };

  constructor() { }

  ngOnInit() {
  }

}
