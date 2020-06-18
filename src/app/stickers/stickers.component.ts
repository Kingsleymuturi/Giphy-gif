import { Component, OnInit } from '@angular/core';
import { StickerService } from '../sticker-service/stickerservice.service';
import { Giphys } from '../giphy';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
sticker:Giphys[];
  constructor(public stickerService:StickerService){}
  
  searchSticker(searchIt: string){
    this.stickerService.searchSticker(searchIt).then(
      (success)=>{
        this.sticker = this.stickerService.stickerArray;
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  ngOnInit() {
    this.searchSticker('laptop');
  }

}
