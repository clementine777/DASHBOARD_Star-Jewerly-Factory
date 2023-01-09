import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiconectService {
  url = '/api';
  constructor(private http: HttpClient) {}
  //RUTA GET loadAllProducts
  getAllProducts() {
    return this.http.get(this.url);
  }
  //RUTA GET selectIdProducts
  getOneProduct(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  //RUTA POST  addProduct
  addNewProduct(product: product) {
    // return this.http.post(this.url, product);
    return this.http.post(this.url + `/create`, product);
  }
  //RUTA DELETE deleteProduct
  deleteProduct(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  //RUTA PUT updateProduct
  modificateProduct(id: string, product: product) {
    return this.http.put(this.url + '/' + id, product);
  }
}

export interface product {
  id: string;
  product_name?: string;
  price?: string;
  product_description?: string;
  stock?: string;
  weight?: string;
  material?: string;
  product_type?: string;
  pics?: string;
}
