import { Component, OnInit } from '@angular/core';
import {Food  } from "../food-list/food-list.component";
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodlist:Array<Food >;
  constructor(foodService:FoodService) { 
  //   this.foodlist =[
  //   {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-xSaI-OyEps0mqA3nWVVvKSolxtSZbmrk.jpg'
  //   ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
  //    {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-_txrWkIBCCkrS5J6-QIrfz0oYPyYvy32.jpg'
  //    ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
  //    {imageUrl:'https://ed.files-media.com/ud/images/1/21/60070/DSC07225_Cover.JPG'
  //    ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'}
  // ]
  this.foodlist = foodService.foodlist;
}

  ngOnInit() {
    // console.dir("home ngOnInit");
    // alert("home ngOnInit");
  }
  // addFoodList(){
  //   this.foodlist =[
  //     {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-xSaI-OyEps0mqA3nWVVvKSolxtSZbmrk.jpg'
  //     ,name:'ซีฟู๊ด1',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
  //      {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-_txrWkIBCCkrS5J6-QIrfz0oYPyYvy32.jpg'
  //      ,name:'ซีฟู๊ด2',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
  //      {imageUrl:'https://ed.files-media.com/ud/images/1/21/60070/DSC07225_Cover.JPG'
  //      ,name:'ซีฟู๊ด3',description:'ซีฟูดสดสะอาด สุดคุ้!!!'}
  //   ]
  // }
  // addFoodEventEmitter(dataFood:Food)
  // {
  //   alert("Food name "+ dataFood.name);
  //   console.log(dataFood);
  // }
  

}

