import { Component, OnInit } from '@angular/core';
import { product, ApiconectService } from '../../SERVICES/apiconect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  product: product = {
    id: '',
    product_name: '',
    price: '',
    product_description: '',
    stock: '',
    weight: '',
    material: '',
    product_type: '',
    pics: '',
  };

  constructor(
    private ApiconectService: ApiconectService,
    private Router: Router
  ) {}

  ngOnInit(): void {}

  agregar() {
    // delete this.product.id;
    console.log(this.product);

    this.ApiconectService.addNewProduct(this.product).subscribe();
    this.Router.navigate(['/inicio']);
  }
}
