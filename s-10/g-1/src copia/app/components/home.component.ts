import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <div class="mt-5 d-flex justify-content-around">
  <button (click)="postAttivi()" class="btn btn-primary">Vai ai post attivi</button>
  <button (click)="postInattivi()" class="btn btn-primary">Vai ai post non attivi</button>
</div>
`
,
  styles: [``],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  postAttivi() {
    this.router.navigate(['/post-attivi']);
  }

  postInattivi() {
    this.router.navigate(['/post-inattivi']);
  }
}
