import { Injectable } from '@angular/core';
import { Giphys } from '../giphy';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StickerService {
  stickerArray:Giphys[]=[];

  constructor(private http:HttpClient) { }

  searchSticker(searchIt:string){
    interface Results{
      data:[];
    }

    let searchEndpoint = "https://api.giphy.com/v1/stickers/search?api_key="+environment.apiKey;
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<Results>(searchEndpoint+"&q="+searchIt).toPromise().then(
        (results)=>{
          this.stickerArray=[];
         for(let i=0; i<results.data.length;i++){
           this.stickerArray.push(new Giphys(results.data[i]["images"]["fixed_height_still"]["url"])) 
         }
         console.log(this.stickerArray);
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