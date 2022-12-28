import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ApiconectService, product } from 'src/app/SERVICES/apiconect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //variable
  ListarProduct: product[] = [];

  constructor(
    private ApiconectService: ApiconectService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.listaProduct();
  }

  listaProduct() {
    this.ApiconectService.getAllProducts().subscribe(
      (res) => {
        console.log(res);
        this.ListarProduct = <any>res;
      },
      (err) => console.log(err)
    );
  }

  eliminar(id: string) {
    this.ApiconectService.deleteProduct(id).subscribe(
      (res) => {
        console.log('Deleted Item');
        this.listaProduct();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: string) {
    this.Router.navigate(['/edit/' + id]);
  }
}
