import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product:Product = {"id":0,"name":"null",'price':0};
  
  constructor(private router:Router,
    private productService:ProductService,
    private route:ActivatedRoute) { 
      const id = this.route.snapshot.paramMap.get('id') || "-1";
      this.productService.readById(id).subscribe(product=> this.product=product);
    }

  ngOnInit(): void {
  }

  deleteProduct():void{
    this.productService.delete(this.product).subscribe(()=> {
      this.productService.showMessage('Produto excluído com sucesso!')
      setTimeout(()=>this.router.navigate(['/products']),1500)})
      ;
  }

  cancel():void{
    this.router.navigate(['/products']);
  }

}
