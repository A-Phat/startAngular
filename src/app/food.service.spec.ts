import { FoodService } from "./food.service";
import { Food } from './food-list/food-list.component';

describe("FoodService", () => {
  it("should append ส้มตำไทย ", () => {
    const foodService = new FoodService();
    foodService.addFood({ name: "ส้มตำไทย", description: "ทะเล", imageUrl: "" });

    expect(foodService.foodlist).toEqual([
      {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-xSaI-OyEps0mqA3nWVVvKSolxtSZbmrk.jpg'
    ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
     {imageUrl:'http://www.d-daytrendy.com/common/upload/life-style/324/post-_txrWkIBCCkrS5J6-QIrfz0oYPyYvy32.jpg'
     ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
     {imageUrl:'https://ed.files-media.com/ud/images/1/21/60070/DSC07225_Cover.JPG'
     ,name:'ซีฟู๊ด',description:'ซีฟูดสดสะอาด สุดคุ้!!!'},
      { name: "ส้มตำไทย", description: "ทะเล", imageUrl: "" }
    ]);
  });

});
