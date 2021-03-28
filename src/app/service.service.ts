import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const baseUrl = 'http://localhost:3000';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  post(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(baseUrl+'/vote', data);
}

}
