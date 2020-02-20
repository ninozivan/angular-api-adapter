import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {
  private reqresBaseUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {
    console.log('ReqresApiService constructed!');
    this.makeTestApiGet();
  }

  public makeTestApiGet() {
    console.log('makeTestApiGet init!');
    const tmpData = this.http
      .get(this.reqresBaseUrl + 'users')
      .subscribe(res => console.log('makeTestApiGet response: ', res));
  }
}
