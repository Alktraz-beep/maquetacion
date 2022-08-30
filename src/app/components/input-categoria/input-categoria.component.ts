import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categoria.interface';
import { ServiciosPaginaService } from '../../services/servicios-pagina.service';


@Component({
  selector: 'app-input-categoria',
  templateUrl: './input-categoria.component.html',
  styles: [
  ]
})
export class InputCategoriaComponent implements OnInit {
  categorias!:Categorias;
  constructor(private paginaService:ServiciosPaginaService) {
   }//

  ngOnInit(): void {
    this.paginaService.getLista()
    .subscribe(categorias=>{
      this.categorias=categorias;
      console.log(categorias.Categorias[0])
    });
  }

}
