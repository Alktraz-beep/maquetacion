import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/interfaces/categoria.interface';
import { ServiciosPaginaService } from 'src/app/services/servicios-pagina.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styles: [
    `
    hr{
      background-color: #55ff33;
      
      height: 2px;
    }
    `
  ]
})
export class OpcionesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
