
//variables
/* 
1. Tasa de uso básico: 10% del importe, mínimo 10 $ y máximo 50 $. 
2. Comisión especial del vendedor: 2% del importe base
3. Costo añadido para la asociación:
    a. 5 $ para un importe entre 1 $ y 500 $.
    b. 10 $ para un importe entre 501 $ y 1000 $. 
    c. 15 $ por un importe entre 1.001 $ y 3.000 $. 
    d. 20 $ por un importe superior a 3.001 $.
4. Tasa de almacenamiento fija de 100 $. */

let tasaDeUsoBasico = 0.1;
let tasaDeUsoBasicoMin = 10;
let tasaDeUsoBasicoMax = 50;

let comisionEspecialVendedor = 0.02;

let importeEntre1y500 = 5;
let importeEntre501y1000 = 10;
let importeEntre1001y3000 = 15;
let importeSuperior3001 = 20;

let TasaDeAlmacenamiento = 100;


function calculate(offer){

   let primerImporte =  offer * tasaDeUsoBasico;

   if(primerImporte>=50){
    primerImporte = tasaDeUsoBasicoMax
   }else if(primerImporte<=10){
    primerImporte = tasaDeUsoBasicoMin
   }

   let costoAñadido;

   switch (offer) {
    case offer<=500:
        costoAñadido = importeEntre1y500        
        break;
    case offer<=1000:
        costoAñadido = importeEntre501y1000
        break;
    case offer<=3000:
        costoAñadido = importeEntre1001y3000
        break;  
    default:
        costoAñadido = importeSuperior3001
        break;
   }

   let importeBase = (offer-primerImporte-costoAñadido-TasaDeAlmacenamiento)/(1+comisionEspecialVendedor)

   return importeBase;
}

console.log(calculate(500));