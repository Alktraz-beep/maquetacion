import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-widgets',
  templateUrl: './contenedor-widgets.component.html',
  styles: [
  ]
})
export class ContenedorWidgetsComponent implements OnInit {
  textos: string[]=["La Gran Barrera de Coral, Australia.",
  "Machu Picchu, Perú",
  "La Gran Muralla China.",
  "Taj Mahal, India.",
  "Los templos en Angkor, Camboya.",
  "Coliseo romano, Italia.",
  "Parque Nacional Gran Cañón, Estados Unidos.",
  "Aya Sofya, Turquía",
  "Medina de Fez",
  "Los Doce Apóstoles, Australia",
  "Petra, Jordania",
  "Tikal, Guatemala"
];
  constructor() { }

  ngOnInit(): void {
  }

}
