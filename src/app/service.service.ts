import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const baseUrl = 'http://localhost:3000';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  login(data): Observable<HttpResponse<any>> {
    return this.http.post<any>(baseUrl+'/api/login/userLogin', data);
}
  vote(data): Observable<HttpResponse<any>> {
    console.log(data);
    
  return this.http.put<any>(baseUrl+'/api/vote/updateCandidate', data);
}

getVoteResults(): Observable<HttpResponse<any>> {
  return this.http.get<any>(baseUrl+'/api/vote/getResults');
}

}
