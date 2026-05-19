import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
    
  Welcome = 'Este  es  un Mensaje Dinamico';
  listatareas = [
    'Instalar al Angular Cli',
    'Crear un proyecto',
    'Crear Componentes',
    'Crear Servicio'    
  ];
  name = 'James';
  edad = 18;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';
  persona = {
    name : 'Nicolas',
    edad : 18,
    avatar : 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola')
  }
  changeHadler (event:Event){
      console.log(event);
  }
}
