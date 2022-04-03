import { Component } from '@angular/core';
import { Foto } from './interface/foto';
import { FotoService } from './service/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'g-3';

  fotoInArrivo: Foto[] | undefined;

  constructor(private fotoSrv: FotoService){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fotoSrv.get().subscribe((fotoArrivate)=>{
      this.fotoInArrivo = fotoArrivate;
    }, (err) => {
      alert(err);
    });
  }

  cancella(id:number,index:number){
    this.fotoSrv.delete(id).subscribe(
      ()=>{
        this.fotoInArrivo?.splice(index, 1);
      },
      (err)=>{
        alert(err);
      }
    )
  }

  aggiungiFavoriti(){
    this.fotoSrv.conta();
  }
}
