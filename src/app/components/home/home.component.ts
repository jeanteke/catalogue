import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  coverImage = 'assets/img/new-arrivals.png';
  kidsImage = 'assets/img/style-kids.png';
  protectionImage = 'assets/img/protection.png';
  cartIcon = 'assets/icons/icon-cart-white.svg';
  arrowGRightIcon = 'assets/icons/arrow-right-g.svg';
  arrowGLeftIcon = 'assets/icons/arrow-left-g.svg';
  arrowRightIcon = 'assets/icons/arrow-right.svg';
  arrowLeftIcon = 'assets/icons/arrow-left.svg';

  products = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.findAll().subscribe(res => {
      const { results } = res;
      this.product(results)
    });
  }

  product(products) {
    let count = 4;
    for (let i = 0; i < count; i++) {
      this.products.push(products[i]);
    }
  }

}
