import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  ingreso:String="";

  //Este es un constructor del proyecto
  constructor() { }

  ngOnInit(): void {
  }


  texto:String="Hola a todos";

  ejemploClick()
  {
   this.ingreso=this.ingreso+"9";
  }

}
