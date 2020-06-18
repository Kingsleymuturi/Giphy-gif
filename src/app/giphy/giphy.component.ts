import { Component, OnInit } from '@angular/core';
import { GiphyService} from '../giphy-http/giphy-request.service';
import { Giphys } from '../giphy'; 


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  gifs:Giphys [];
    constructor( public httpService:GiphyService) { }
  
    ngOnInit() {
      this.searchaGif('love');
    }
    searchaGif(searchIt: string){
      this.httpService.searchaGif(searchIt).then(
        (results)=>{
          this.gifs = this.httpService.gifys;
        },
        (error)=>{
          console.log('error')
        }
       )
    }
  }
