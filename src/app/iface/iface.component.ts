import { Component, OnInit } from '@angular/core';
import {IfaceService} from './iface.service';
import {SearchResult} from '../search/searchResult';

@Component({
  selector: 'app-iface',
  templateUrl: './iface.component.html',
  styleUrls: ['./iface.component.css'],
  providers: [IfaceService]
})
export class IfaceComponent implements OnInit {
	searchResult = new SearchResult("","","","","");
	
	error: string;
  constructor(private ifaceService: IfaceService) {}

  ngOnInit() {
  }
addInterface() {
    this.ifaceService.addInterface(this.searchResult).subscribe(
      searchResult => {
        this.searchResult = searchResult[0];
		 this.error = "successfilly added";
      },
      err => {
        this.error = err;
        console.log(err);
      }

    );
  }
 loadInterface() {
	
    this.ifaceService.loadInterface(this.searchResult).subscribe(
      searchResult => {
        this.searchResult = searchResult[0];
		console.log(searchResult[0]);
		
      },
      err => {
        this.error = err;
        console.log(err);
      }

    );

  }
  
   editInterface() {
	
    this.ifaceService.editInterface(this.searchResult).subscribe(
      searchResult => {
        console.log("successfully edited");
      },
      err => {
        this.error = err;
        console.log(err);
      }

    );

  }
  deleteInterface() {
	
    this.ifaceService.deleteInterface(this.searchResult).subscribe(
      searchResult => {
        this.searchResult = searchResult;
		console.log(searchResult);
      },
      err => {
        this.error = err;
        console.log(err);
      }

    );

  }
}
