class Cuentausuiario {
    constructor(usuario, batallon, unidades,){
        this.usuario = usuario;
        this.batallon = batallon;
        this.unidades = unidades;
    
    }
    agregar(suma) {
        let t;
        if (suma > 0) {
            this.unidades = this.unidades + suma;
            t = true;
        } else {
            t = false;
        }
        return t;
    }
 
}