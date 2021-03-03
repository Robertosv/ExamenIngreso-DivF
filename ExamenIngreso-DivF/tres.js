/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI,
 el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/



function mostrar()
{
let nombre;
let obraSocial;
let edad;
let temperaturaCorporal;
let sexo;
let personas = 0;
let estadoCivil;
let edadMinima;

do{

	obraSocial = prompt("introduzca obra social: OSDE, PAMI U OTRA");
	
	edad = parseInt(prompt("Ingrese su edad: "));

	temperaturaCorporal = parseInt(prompt("ingrese su T : "));
	
	while(isNaN(temperaturaCorporal){

		temperaturaCorporal = parseInt(prompt("error. ingrese su T expresada en numero : "));
	}

	sexo = prompt("ingrese su sexo f o m");

	while (sexo !== "m" || sexo !== "f"){

		sexo = prompt("ingrese sexo valido. f o m");
	}

	if (obraSocial = "OSDE" && edad>60){

		personas++;
	}

	estadoCivil = prompt("ingrese estado civil : soltero, casado, viudo, divorciado");
	nombre = prompt("introduzca nombre");

	if (estadoCivil == "soltero" && sexo == "f" & edad>edadMinima){

		edadMinima = edad;
		
	}




	


	while(seguir == "s")
}

	alert("Las personas mayores a 60 con OSDE son " + personas);
	alert("El nombre de la mujer soltera mas joven es: "+ nombre+ " y su temperatura es " + temperaturaCorporal);
}
