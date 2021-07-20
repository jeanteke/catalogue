import { Injectable } from '@angular/core';
import { ApiOptions } from './api.options';

@Injectable({
  providedIn: 'root'
})

export class ApiModule {

  constructor(
    private apiOptions: ApiOptions,
  ) { }

  run(options) {
    const requestOptions = this.apiOptions.set( options );
    return requestOptions;
  }

}
