import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(http:Http) { 
    http.get("http://angsila.cs.buu.ac.th/~57160034/887373/project/index.php/Restaurant/top").subscribe(
      {
        next:(res) => {console.dir(res.json())},
        error:(err) => {console.dir(err)},
        complete:() => {console.log("Complate")}
      }
    )
  }

  ngOnInit() {
  }

}
