import {Injectable} from '@angular/core';
import {User} from './user';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private apiUrl = 'http://localhost:8080/eBBSInterfacePortal/user/login';
  constructor(private http: Http) {}

  login(user: User): Observable<User> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


}
