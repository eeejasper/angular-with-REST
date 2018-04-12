
export class SearchResult {


  ifaceName: string;
  versions: string;
  countries: string;
  uploads: string;
  downloads: string;

  constructor(ifaceName: string, versions: string, countries: string, uploads: string, downloads: string) {
    this.ifaceName = ifaceName;
    this.versions = versions;
    this.countries = countries;
	this.uploads= uploads;
	this.downloads= downloads;
  }




}
