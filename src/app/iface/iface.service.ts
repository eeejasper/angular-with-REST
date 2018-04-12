import {Injectable} from '@angular/core';
import {SearchResult} from '../search/searchResult';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class IfaceService {

  private apiUrl = 'http://localhost:3000/iface';
  private url: string;

  constructor(private http: Http) {
  }

  addInterface(ifaceRecord: SearchResult): Observable<SearchResult> {
 
    return this.http.post(this.apiUrl,ifaceRecord)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  
   loadInterface(ifaceRecord: SearchResult): Observable<SearchResult> {
 console.log(ifaceRecord);
    return this.http.get(this.apiUrl+"/"+ ifaceRecord.ifaceName)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  editInterface(ifaceRecord: SearchResult): Observable<SearchResult> {
 console.log(ifaceRecord.ifaceName);
 console.log(ifaceRecord);
    return this.http.put(this.apiUrl+"/"+ifaceRecord.ifaceName,ifaceRecord)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
    deleteInterface(ifaceRecord: SearchResult): Observable<SearchResult> {
 
    return this.http.delete(this.apiUrl+"/"+ifaceRecord.ifaceName)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
