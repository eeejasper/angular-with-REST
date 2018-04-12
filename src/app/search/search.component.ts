import {Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {SearchResult} from './searchResult';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  searchResult: SearchResult[];
  error: string;
  private enteredInterfaceName: string;
  constructor(private searchService: SearchService) {}



  ngOnInit() {

  }
  searchInterface() {
	console.log(this.enteredInterfaceName);
    this.searchService.searchInterface(this.enteredInterfaceName).subscribe(
      searchResult => {
        this.searchResult = searchResult;
      },
      err => {
        this.error = err;
        console.log(err);
      }

    );

  }

}
