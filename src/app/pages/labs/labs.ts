import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal} from '@angular/core';


@Component({
  selector: 'app-labs',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
    
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
  name = signal('James');
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
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
      console.log(event);
  }
  keydownHandler(event : KeyboardEvent)
  {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
