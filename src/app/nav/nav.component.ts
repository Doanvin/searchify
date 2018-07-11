import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // choose which api endpoint to fetch (search-type value)
    const searchType = form.value.searchType;
    if (searchType == 'artist') {
      this.fetchSearch(form.value.query, searchType);
    }
  }
  
  fetchSearch(name, type) {
    // make api call to https://api.spotify.com/v1/search
    // ex. ?q=name:query&type=seachType
  }

}
