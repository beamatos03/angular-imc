import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
   peso : number = 0;
   altura : number = 0;
  resultado : number = 0;
  msg : string = ""


  CalcIMC(){
  var altura = 0;
  altura = this.altura/100;
   this.resultado = parseFloat((this.peso/(altura*altura)).toFixed(2));

   if(this.resultado < 18.5){
    this.msg = "Magreza";
}
else if(this.resultado <= 24.9){
  this.msg = "Normal";
}
else if(this.resultado <= 29.9){
  this.msg = "Sobrepeso";
}
else if(this.resultado <= 34.9){
  this.msg = "Obesidade grau I";
}
else if(this.resultado <= 39.9){
  this.msg = "Obesidade grau II";
}
else if(this.resultado > 40){
  this.msg = "Obesidade grau III";
}
else{
  this.msg = "Erro. Insira valores válidos";

  }
  }}
