/*Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/


function mostrar()
{
	let nombreDelProducto;
	let tipoDelProducto;
	let precio;
	let precioMayor = 0;

	let seguir = "s";

	let cantidad;
	let cantidadMaxima = 0;
	let cantidadAlcohol=0;
	let cantidadIac = 0;
	let cantidadQuat = 0;
	let categoria;
	let fabricante;

	let acumuladorDetergente;


	do {

		nombreDelProducto = prompt("Ingrese el nombre del producto:  ");

		while(!isNaN(nombreDelProducto)){

			nombreDelProducto = prompt("Error. Ingrese el producto por su nombre");
		}


		tipoDelProducto = prompt("Ingrese productos de alcohol, iac o quat ");

		while(!isNaN(tipoDelProducto)||(tipoDelProducto !== "alcohol" && tipoDelProducto !== "iac" && tipoDelProducto !== "quat")){
			
			tipoDeProducto = prompt("Error. Solo puede ingresar alcohol, iac o quat: ");
		}

		precio = parseInt(prompt("Ingrese el precio. Entre 100 y 300: "));

		while(isNaN(precio)||((precio>300 || precio<100))){

			precio = parseInt(prompt("Error ingrese precuo valido. Entre 100$ y 300$: "));

		}

		cantidad = parseInt(prompt("ingrese cantidad de lo que desea comprar"));

		while(isNaN(cantidad)||(cantidad<0 || cantidad>1000)){

			if (isNaN(cantidad)){

				cantidad = parseInt(prompt("Error. Debe ingresar un numero: "));
			}

			else if (cantidad<0){

				cantidad = parseInt(prompt("Error. Debe ingresar un numero positivo: "));
			}

			else if (cantidad>1000){

				cantidad = parseInt(prompt("Error. No puede comprar mas de 1000 unidades: "));
			}

		}
			

		categoria = prompt("ingrese la categoria: desinfectante, bactericida, o detergente");

		while(!isNaN(categoria)||(categoria !== "desinfectante" && categoria !== "bactericida"&& categoria !== "detergente")){

			prompt("Error. Solo puede ingresar desinfectante, bactericida, o detergente ");

		}

		marca = prompt("Ingrese la marca: ");

		fabricante = prompt("ingrese fabricante: ");


		seguir = prompt("desea seguir ingresando productos? s/n");

	} while (seguir == "s");

	switch (tipoDelProducto){

		case "alcohol":

		cantidadAlcohol += cantidad;

		if(precioMayor<precio){

			precioMayor = precio;
		}

		break;

		case "iac":

		cantidadIac += cantidad;

		if(precioMayor<precio){

			precioMayor = precio;
		}

		break;

		case "quat":

		cantidadQuat += cantidad;

		if(precioMayor<precio){

			precioMayor = precio;
		}

		break;
	}

	if (cantidadMaxima<cantidad && categoria =="desinfectante") {

		cantidadMaxima = cantidad;
	}

	else if (cantidadMaxima<cantidad && categoria =="bactericida"){	

		cantidadMaxima = cantidad;
	
	}

	else if (cantidadMaxima<cantidad && categoria =="detergente"){	

		cantidadMaxima = cantidad;

	}

	if (categoria == "detergente" && precio<200){

		acumuladorDetergente += categoria; 
	}

	
	

	alert("El promedio de alcohol es: " (cantidadAlcohol)/(cantidadAlcohol+cantidadIac+cantidadQuat ));
	alert("El promedio de iac es: " (cantidadIac)/(cantidadAlcohol+cantidadIac+cantidadQuat ));
	alert("El promedio de quat es: " (cantidadIac)/(cantidadAlcohol+cantidadIac+cantidadQuat ));
	alert("La cantidad maxima por categoria es: " + cantidadMaxima + " de " + categ oria);
	alert("Se compraron " + acumuladorDetergente + "con precio menor a 200$");
	alert("El producto con el precio mas caro es: " + fabricante + " a " + precioMayor + "$");
	
}

