import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchIt:string;
@Output() emitSearch = new EventEmitter<any>()

  constructor() { }

  search(){
    this.emitSearch.emit(this.searchIt);

  }

  ngOnInit() {
  }

}
