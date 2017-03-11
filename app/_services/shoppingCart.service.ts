import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  products: any[];

  constructor() {

      if (!JSON.parse(localStorage.getItem('testsCart'))) {
        localStorage.setItem('testsCart', JSON.stringify([]));
      }

  }

  add(product: any){

      console.log("addToTestsCart ShoppingCartService");
      this.products = JSON.parse(localStorage.getItem('testsCart'));
      this.products.push(product);
      localStorage.setItem('testsCart', JSON.stringify(this.products));

  }

  remove(index: number) {

      this.products = JSON.parse(localStorage.getItem('testsCart'));
      if (index > -1) {
          this.products.splice(index, 1);
      }
      localStorage.setItem('testsCart', JSON.stringify(this.products));

  }

  clear() {

      localStorage.setItem('testsCart', JSON.stringify([]));

  }

  get() {

    return JSON.parse(localStorage.getItem('testsCart'));

  }

}
