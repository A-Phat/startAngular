import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { FoodService } from 'src/app/food.service';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodListComponent,
    AddFoodComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:"add",component:AddFoodComponent},
      {path:"edit/:id",component:AddFoodComponent},
      {path:"edit/:id/:name",component:AddFoodComponent},

      {path:"list",component:FoodListComponent},
      {path:"order",loadChildren:"../order/order.module#OrderModule"}
    ])
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
