import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  consleLog(msg: string) {
    console.log(msg);
  }
}
