import { Component, OnInit } from '@angular/core';
import { FotoService } from '../service/foto.service';

@Component({
  selector: 'app-favoriti',
  template: `
    <h3>Totale Foto Favorite = {{totale}}</h3>
  `,
  styles: [
  ]
})

export class FavoritiComponent implements OnInit {
  totale: number = 0;

  constructor(private fotoSrv:FotoService) { }

  ngOnInit(): void {
    this.fotoSrv.sub.subscribe((conta) =>{
      this.totale = conta;
    })
  }

}
