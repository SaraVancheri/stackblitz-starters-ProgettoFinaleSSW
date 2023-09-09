import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any',
})
export class bibliotecaService {
  URLget: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/' +
    'get' +
    '?key=70964f5c';
  URLset: string =
    'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/' +
    'set' +
    '?key=70964f5c';

  constructor() {}

  public getData(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URLget,
      crossDomain: true,
    });
  }

  public setData(nuovoArchivio: string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.URLset,
      crossDomain: true,
      body: nuovoArchivio,
    });
  }
}
