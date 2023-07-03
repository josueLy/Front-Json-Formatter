import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  readonly apiUrl = "http://localhost:8080/api/"

  constructor(private http: HttpClient) { }

  text: string = '';

  //Get the text in format json
  getJsonFormat(textJson: String): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    return this.http.post<string>(this.apiUrl + 'json/', textJson, httpOptions);

  }
}
