import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  static criouNovoCurso = new EventEmitter<string>();
  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso); // mesma instancia
    CursosService.criouNovoCurso.emit(curso); // instancia diferente
  }

}
