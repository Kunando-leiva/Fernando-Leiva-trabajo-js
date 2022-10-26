
console.log( "usuario: fercho")
console.log(" contraseña:123456")

alert("hola bienvenido: \n por favor favor ingrese su usuario y contraseña")
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

alert("ingreso a su menu\n elija una de las opciones")
let opcion = prompt("(1)saldo\n (2)trasferencia\n (3)ingresar dinero")
let saldo = 10.000;

switch(opcion){
    case "1":
        alert("su saldo al dia de la fecha es de $" + saldo)
        break;

    case "2":
        let trasferencia=prompt("ingrese la cantidad que desea trasferir");
        alert("ustede esta por trasferir " + "$ "+ trasferencia) ;
        alert("la trasferencia de $ " + trasferencia + " fue exitosa")
        break;
    
    case "3":
        let saldo= 10.000;
        let ingreso=prompt("cantidad que desea ingresar de dinero");
        total= (ingreso + saldo)
        alert("su sueldo total es de $ " + total)


}















