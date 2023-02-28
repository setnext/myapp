import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})




export class HomeComponent implements OnInit {

  i:number = 0;

  myProducts:Product[] = [];

  myData:String[] =[];

  constructor() { }

  ngOnInit(): void {
  }


  // Functions - Start


  saveData(productName:string, price:string,quatity:string){

    let myNewProduct:Product ={name:productName,price:price,quatity:quatity}

    this.myProducts.push(myNewProduct);



    this.i= this.i+1;

    this.myData.push("Item Number: " +  this.i.toString())



    console.log("Data Saved Successfully");
  }


  CalculateTotal(){

    this.myData.forEach(x =>{

      


    });

    
  



    
  }


  // Functions - End

}


export interface Product{

  name:string,
  price:string,
  quatity:string;

}