import { Component, OnInit } from '@angular/core';
import { product, ApiconectService } from '../../SERVICES/apiconect.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
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
    private Router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_entry = <string>this.ActivatedRoute.snapshot.params['id'];
    console.log('id de entrada' + id_entry);

    if (id_entry) {
      this.ApiconectService.getOneProduct(id_entry).subscribe(
        (res) => {
          this.product = res as product;
          console.log(res);
        },
        (err) => console.log(err)
      );
    }
  }

  modificar() {
    this.ApiconectService.modificateProduct(
      this.product.id,
      this.product
    ).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );

    this.Router.navigate(['/inicio']);
  }
}
