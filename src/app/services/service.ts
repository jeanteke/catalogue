import { Injectable } from '@angular/core';
import { ApiProvider } from '../providers/api.provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(
    private apiProvider: ApiProvider,
  ) { }

  public search(requestParams: any): Observable<any> {

    return this.apiProvider.search(requestParams);
  }

  public findAll(): Observable<any> {

    return this.apiProvider.reads();
  }

}
