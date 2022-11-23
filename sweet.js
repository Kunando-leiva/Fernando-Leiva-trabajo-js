
Swal.fire({
    title: 'Esta entrando en una pagina de bebidas alcohol\n es mayor de 18 años?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, soy mayor de 18',
    cancelButtonText: 'No, no soy mayor de 18'
}).then((result) => {

    if (result.isConfirmed) {
        Swal.fire({
            title: 'bienvenidos a Vikins Vinos!',
            icon: 'success',
            
        })
    }
})
