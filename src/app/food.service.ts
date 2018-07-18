import { Injectable } from '@angular/core';
import { Food } from './food-list/food-list.component';

@Injectable()
export class FoodService {
 public foodlist =
  [
    {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-xSaI-OyEps0mqA3nWVVvKSolxtSZbmrk.jpg'
    ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
     {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-_txrWkIBCCkrS5J6-QIrfz0oYPyYvy32.jpg'
     ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
     {imageUrl:'https://ed.files-media.com/ud/images/1/21/60070/DSC07225_Cover.JPG'
     ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'}
  ]
  addFood(food:Food){
    this.foodlist.push(food);
  }
  constructor() { 
    
  }
}
