const cuentas = [];
console.log( "usuario: fercho")
console.log(" contraseña:123456")

swal.fire("hola bienvenido: \n por favor favor ingrese su usuario y contraseña")
let usuario= prompt("usuario")

while(usuario != "fercho"){
    alert ( "usuario incorrecto, intente de nuevo ");
    usuario= prompt("usuario")
}

let contraseña= prompt("contraseña")

while( contraseña!= "123456"){
    alert("contraseña incorrecta, intente de nuevo");
    contraseña= prompt("contraseña")
}

alert("ingreso al menu de creacion y seleccion de unidades ")
let opcion = parseInt(
    prompt(
        "Ingrese una opcion:\n1 - Creacion de batallon\n2 -cantidad de unidades que tiene\n3 - agregar unidades\n4 - total de unidades\n5 - Seleccionar cuenta\n6 - Ordenar\n7 - Salir "
    )
);

let usuarioind;
while (opcion != 7) {
    let suma;
    switch (opcion) {
        case 1:
            let usuario = prompt("Ingrese un usuario");
            let batallon = prompt("Ingrese nombre del batallon");
            let unidades = parseInt(prompt("cuantas unidades desea tener en su batallon"));
            
            let cuenta = new Cuentausuiario (usuario, batallon, unidades);
            cuentas.push(cuenta);
            usuarioind = cuentas.length - 1;
            break;
        case 2:
            if (cuentas.length != 0) {
                alert("el batallon " + (cuentas[usuarioind].batallon)  +  " tiene  " +  (cuentas[usuarioind].unidades) + " unidades de batalla");
               
            } else {
                alert("No hay ningun usuario creado");
            }
            break;
        case 3:
            if (cuentas.length != 0) {
                suma = parseInt(prompt("cantidad de unidades a agregar"));
                if (cuentas[usuarioind].agregar(suma)) {
                    alert("se agregaron " + suma + " unidades correctamente");
                } else {
                    alert("unidades rebeldes, problemas para agregarlas, operacion cancelada");
                }
            } else {
                alert("No hay ningun usuario creado");
            }
            break;
        case 4:
            let plataTotal = cuentas.reduce(
                (acumulador, elemento) => acumulador + elemento.unidades,
                 0  
                );
              
                
            alert("En el batallon hay: " + plataTotal +  "unidades para la batalla");
            break;
           
        case 5:
            if (cuentas.length != 0) {
                let nombre = prompt("Ingrese un usuario a buscar");
                let cuenta = cuentas.find(
                    (elemento) => elemento.usuario == nombre
                );
                usuarioind = cuentas.indexOf(cuenta);
            } else {
                alert("No hay ningun usuario creado");
            }
            break;
        case 6:
            console.log(cuentas);
            break;
        case 7:
            alert("hasta la proxima");
            break;
         
    }
    opcion = parseInt(
        prompt(
            "Ingrese una opcion:\n1 - Creacion de batallon\n2 -cantidad de unidades que tiene\n3 - agregar unidades\n4 - total de unidades\n5 - Seleccionar cuenta\n6 - Ordenar\n7 - Salir "
        )
    );
}