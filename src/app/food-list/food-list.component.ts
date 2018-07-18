import { Component, OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnChanges,OnDestroy,AfterContentChecked
,AfterContentInit,AfterViewChecked,AfterViewInit,DoCheck {
  ngDoCheck(): void {
   // alert("food list ngDoCheck");
  }
  ngAfterViewInit(): void {
    //alert("food list ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    //alert("food list ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    //alert("food list ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    //alert("food list ngAfterContentChecked");
  }
  ngOnDestroy(): void {
    //alert("food list ngOnDestroy");
  }
  ngOnChanges(): void {
    alert("food list ngOnChanges");
  }

 @Input()
  foodlist:Array<Food>;//variable input

@Output() addFoodEvent = new EventEmitter<Food>();

  showAdd:boolean = false;
  foodService:FoodService;
  constructor(foodService:FoodService) { 

    this.foodService = foodService;
    this.foodlist = foodService.foodlist;
  }

  ngOnInit() {
    
   // alert("food list ngOnInit");
  }
  

  deleteFood(index:number){
    this.foodlist.splice(index,1)
  }

}
export interface Food {
  imageUrl:string ,
  name:string ,
  description:string 

}


