import { Component } from '@angular/core';
import { signal} from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-home',
  imports: [NgForOf],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    Welcome = 'Este  es  un Mensaje Dinamico';
  // listatareas = [
  //   'Instalar al Angular Cli',
  //   'Crear un proyecto',
  //   'Crear Componentes',
  //   'Crear Servicio'    
  // ];
  // aqui hemos  vuelto el arrays  de  elementos una señal
   listatareas =signal ([
    'Instalar al Angular Cli',
    'Crear un proyecto',
    'Crear Componentes',
    'Crear Servicio'    
  ]);
  // changeHandler (event ()){

  // }


}
