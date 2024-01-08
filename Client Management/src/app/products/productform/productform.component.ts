import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {
  product:Product={id:1,password:'',name:'',
  email:'',date:1,month:1, time:1};

  constructor(private http:ProductService,private router:Router){}
  onSubmit(){
    console.log(this.product);
    this.http.addProduct(this.product)
    .subscribe(resp=>console.log(resp));
    alert("Product Added");
    this.router.navigate(['productlist'])
  }
}
