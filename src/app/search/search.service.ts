import {Injectable} from '@angular/core';
import {SearchResult} from './searchResult';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SearchService {

  private apiUrl = 'http://localhost:3000/iface';
  private url ;

  constructor(private http: Http) {
  }

  searchInterface(ifaceName: string): Observable<SearchResult[]> {
   
	this.url = this.apiUrl;
	if(ifaceName)
		this.url = this.apiUrl+"/"+ifaceName;
    return this.http.get(this.url)
      .map((res: Response) => res.json()).retry(3)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }



}
