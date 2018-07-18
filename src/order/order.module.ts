import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild([
      {path:"",component: OrderComponent}
    ])

  ],
  declarations: [OrderComponent]
 // entryComponents:[OrderComponent],
  
})
export class OrderModule { }
