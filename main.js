var horas,pago,resultado;
horas = prompt("Ingrese el número de horas trabajadas");
pago = prompt("Ingrese el monto de pago por hora trabajada");
resultado = parseFloat(horas)*parseFloat(pago);
alert(resultado);