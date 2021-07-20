import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  iconSearch = 'assets/icons/icon-search.svg';
  iconUser = 'assets/icons/icon-user.svg';
  iconCart = 'assets/icons/icon-cart.svg';

  items = [
    'Hombre',
    'Mujer',
    'Junior',
    'Niños',
    'Accesorios',
    'Ofertas'
  ]

  searchInput: FormControl;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchInput = new FormControl('', Validators.required);
  }

  searchProducts() {
    if (this.searchInput.valid) {
      this.router.navigate(['products'], { state: { search: this.searchInput.value } });
    }
  }

}
