import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];
  search: any;

  cartIcon = 'assets/icons/icon-cart-white.svg';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {
    this.search = this.router.getCurrentNavigation().extras.state.search;
  }
  
  ngOnInit(): void {
    this.apiService.search({ q: this.search }).subscribe(res => {
      const { results } = res;
      this.products = results;
    });

  }

}
