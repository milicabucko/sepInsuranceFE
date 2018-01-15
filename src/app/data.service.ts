import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private helloUrl = 'hello';
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) { }

  sayHello(): Promise<String> {
    return this.http.get('http://localhost:9001/hello')
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
