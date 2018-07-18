import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/food.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
 
  addFoodGroup :FormGroup

  constructor(private foodService:FoodService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { 
    this.foodService = foodService;
    this.addFoodGroup = formBuilder.group({
      nameControl : new FormControl("",[Validators.required,Validators.minLength(6)]),
      descriptionControl : new FormControl("",Validators.required),
      imageurlControl : new FormControl("",Validators.required)

    })

   
    //1
    // route.paramMap.subscribe(
    //   (paramMap) => {},
    //   (err) => {},
    //   () => {}
    // );

    //2
    route.paramMap.subscribe({
      next:(paramMap) => {

      },
      error: (err) => {
       // console.dir(err)
      },
      complete:()=>{
       // console.log("Complete")
      }
    }
    );
    
    route.queryParamMap.subscribe({
      next:(queryParamMap)=>{
       // console.dir (queryParamMap.get('des'))
      }
    }

    );
  }

  ngOnInit() {
   // console.log("ngOnInit")
  }
  showAdd:boolean = false;
 
  addFood(form: any){
    console.log("*******Value  :  "+ form.get("nameControl").value);
    console.dir(form);

    this.showAdd = false;
  // if(form[0].value != null && form[0].value != "" ){
      this.foodService.addFood({imageUrl:form.get("imageurlControl").value
      ,name:form.get("nameControl").value,description: form.get("descriptionControl").value});
      //this.foodService.addFood({imageUrl:form[2].value,name:form[0].value,description:form[1].value});
 //   }
    this.router.navigate(["/list"]);

   
    
  }
}
