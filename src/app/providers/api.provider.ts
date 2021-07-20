import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiModule } from '../modules/api.module';

@Injectable({
  providedIn: 'root'
})

export class ApiProvider {

  constructor(private apiModule: ApiModule, private http: HttpClient) { }

  reads() {
    const path   = 'sites/MCO/search';
    const method = 'get';
    const query = { category: 'MCO1430' };

    const options = this.apiModule.run({ path, method, query });
    return this.http[options.method]<any>(options.url, {headers: options.headers, params: options.query});
  }

  search(requestParams) {
    const path   = 'sites/MCO/search';
    const method = 'get';
    const query = { category: 'MCO1430', ...requestParams};

    const options = this.apiModule.run({ path, method, query });
    return this.http[options.method]<any>(options.url, {headers: options.headers, params: options.query});
  }


}
