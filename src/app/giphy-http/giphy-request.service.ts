import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../../environments/environment';

import {Giphys} from '../giphy'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  gifys:Giphys[]=[];

  constructor(private http:HttpClient) { }

  searchaGif(searchIt:string){
    interface Results{
      data:[];
    }
    let searchEndpoint = "https://api.giphy.com/v1/gifs/search?api_key="+environment.apiKey;

    let promise = new Promise((resolve, reject)=>{
      this.http.get<Results>(searchEndpoint+"&q="+searchIt).toPromise().then(
        (results)=>{
          this.gifys=[];
          for(let i=0; i<results.data.length;i++){
            this.gifys.push(new Giphys(results.data[i]["images"]["fixed_height"]["url"]));
          }
          console.log(this.gifys);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
    return promise;
  }
}
