import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Product } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  getShippingPrices(): Promise<{type: string, price: number}[]> {
    return lastValueFrom(this.http.get<any[]>('/assets/shipping.json'));
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  } 

  getItems(): Product[] {
    return this.items;
  }
}
