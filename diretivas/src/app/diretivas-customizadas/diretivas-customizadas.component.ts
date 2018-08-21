import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent {

  mostrarCursos: boolean = false;

  constructor() { }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
