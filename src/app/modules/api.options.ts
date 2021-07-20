import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiOptions {
  constructor() { }


  set(options) {
    let url;
    if (options.params) {
      const paramValue = Object.values(options.params);
      url = `${environment.api_ML}/${options.path}/${paramValue}`;
    } else {
      url = `${environment.api_ML}/${options.path}`;
    }

    return {
      url,
      method: options.method,
      data: options.body,
      query: options.query,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer Token'
      }
    };
  }

}
