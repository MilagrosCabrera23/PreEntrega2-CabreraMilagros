//SIMULADOR DE PRESTAMOS 
class Prestamos {
    constructor(idI, montoI, interesI, plazoMeses) {
        this.id = idI,
            this.monto = montoI,
            this.tasaIntereses = interesI,
            this.plazo = plazoMeses
    }
    simulacionPrestamos() {
        console.log(`El prestamo numero ${this.id} con el monto de ${this.monto} con una tasa de interes de ${this.tasaIntereses} con un plazo de ${this.plazo}`)
    }

}



function validarInput(entrada) {
    if (!/^[0-9]+$/.test(entrada)) {
        return true
    }
    else {
        return false
    }
}

//funcion que pide los datos,valida y luego lo muestra al resultado.
function pedirDatos() {
    let ingresoNombre = prompt("Ingrese su nombre completo")
    while (/^[0-9]+$/.test(ingresoNombre)) {
        alert("La entrada no es válida,ingrese solo su nombre completo.");
        ingresoNombre = prompt("Ingrese su nombre completo")
    }

    let ingresoDni = parseInt(prompt(`Ingrese su DNI`))
    while (validarInput(ingresoDni)) {
        alert("La entrada no es válida,ingrese solo su DNI.");
        ingresoDni = parseInt(prompt("Ingrese su DNI"))
    }

    let ingresoTelefono = parseInt(prompt(`Ingrese su numero de telefono`))

    while (validarInput(ingresoTelefono)) {
        alert("La entrada no es válida,ingrese solo su numero de telefono.");
        ingresoTelefono = parseInt(prompt("Ingrese su numero de telefono"))
    }


    verificacionDatos(ingresoNombre, ingresoDni, ingresoTelefono)

    //array con los valores
    return [ingresoNombre, ingresoDni, ingresoTelefono]
}
pedirDatos()

//verficica los datos de la funcion pedir datos
function verificacionDatos(nombre, dni, telefono) {
    alert(`Sus datos son los siguientes:Su nombre es ${nombre}, su Dni: ${dni},su telefono:${telefono}.`)
}
//INSTANCIACION DE OBJETOS
const opcion1 = new Prestamos(1, 30000, 5, 1)
const opcion2 = new Prestamos(2, 100000, 10, 5)
const opcion3 = new Prestamos(3, 300000, 18, 15)
const opcion4 = new Prestamos(4, 600000, 21, 20)
const opcion5 = new Prestamos(5, 400000, 35, 30)
const opcion6 = new Prestamos(6, 200000, 28, 25)
const opcion7 = new Prestamos(7, 800000, 40, 50)
const opcion8 = new Prestamos(8, 1700000, 62, 65)
const opcion9 = new Prestamos(9, 2600000, 76, 72)
const opcion10 = new Prestamos(10, 3500000, 85, 84)
const opcion11 = new Prestamos(11, 4200000, 90, 90)
const opcion12 = new Prestamos(12, 5000000, 100, 98)

//ARRAY;
const listaPrestamos = []
// pusheamos al array
listaPrestamos.unshift(opcion1, opcion2, opcion3, opcion4, opcion5, opcion6)
listaPrestamos.push(opcion7, opcion8, opcion9, opcion10, opcion11, opcion12)


//OPCION 1 DEL MENU SIMULA EL PRESTAMO CON LOS VALORES RECIBIDOS Y VALIDA SUS ENTRADAS
function simulacionPrestamos() {
    let montoPretendido = parseInt(prompt(`Ingrese el monto del préstamo en pesos:`));


    if (validarInput(montoPretendido)) {
        alert("La entrada no es válida,ingrese solo el monto del préstamo en pesos.");
        montoPretendido = parseInt(prompt(`Ingrese el monto del préstamo en pesos:`));
    }

    else if (montoPretendido >= 10000 && montoPretendido > 50000000) {
        alert(`Lo sentimos, el valor mínimo debe ser superior a 10.000 y menor a 5.000.000`)
        montoPretendido = parseInt(prompt(`Ingrese el monto del préstamo en pesos:`));
    }

    let tasaIntereses = parseFloat(prompt(`Ingrese la tasa de interés:`));

    while (validarInput(tasaIntereses)) {
        alert("La entrada no es válida,ingrese solo la tasa de interes .");
        tasaIntereses = parseFloat(prompt("Ingrese la tasa de interés: "))
    }


    let plazoMeses = parseInt(prompt(`Ingrese el plazo en meses:`));

    let monto = montoPretendido;
    let tasa = tasaIntereses;
    let plazo = plazoMeses;


    if (validarInput(plazoMeses > 1)) {
        alert("El plazo en meses debe ser superior a 0.")
        plazoMeses = parseInt(prompt("Ingrese el plazo en meses: "))
    }

    const PrestamoNuevo = new Prestamos(listaPrestamos.length + 1, montoPretendido, tasaIntereses, plazoMeses)
    listaPrestamos.push(PrestamoNuevo)

    console.log(`El prestamo numero ${PrestamoNuevo.id} con el monto de ${PrestamoNuevo.monto} con una tasa de interes de ${PrestamoNuevo.tasaIntereses} con un plazo de ${PrestamoNuevo.plazo}`)
}

//opcion 2:calcula cuota mensual,VALIDA LOS VALORES y luego muestra los resultados segun el interes .

function calcularCuotaMensual() {
    let precioFinal = 0
    let valorCuotas = 0
    let montoIngresado = parseFloat(prompt(`Ingrese el monto del préstamo en pesos:`))
    while (validarInput(montoIngresado)) {
        alert("La entrada no es válida,ingrese el monto del préstamo en pesos:.");
        montoIngresado = parseFloat(prompt("Ingrese el monto del préstamo en pesos: "))
    }

    let cuotas = parseInt(prompt(`Ingrese la cantidad de cuotas que desea (plazo) para calcular el interes | SOLO DISPONIBLE: 6 12 18 24`))
    while (validarInput(cuotas)) {
        alert("La entrada no es válida,ingrese solo  el plazo en meses .");
        plazoMeses = parseInt(prompt("Ingrese el plazo en meses: "))
    }
    switch (cuotas) {
        case 6:
            precioFinal = montoIngresado * 1.4
            valorCuotas = precioFinal / 6
            alert(`El total que usted va a pagar con el interes sumado de 40% es ${precioFinal} en 6 cuotas de un valor de ${valorCuotas.toFixed(1)}`)
            break;
        case 12:
            precioFinal = montoIngresado * 1.6
            valorCuotas = precioFinal / 12
            alert(`El total que usted va a pagar con el interes sumado de 60% es ${precioFinal} en 12 cuotas de un valor de ${valorCuotas.toFixed(1)}`)
            break;
        case 18:
            precioFinal = montoIngresado * 1.8
            valorCuotas = precioFinal / 18
            alert(`El total que usted va a pagar con el interes sumado de 80% es ${precioFinal} en 18 cuotas de un valor de ${valorCuotas.toFixed(1)}`)
            break;
        case 24:
            precioFinal = montoIngresado * 2
            valorCuotas = precioFinal / 24
            alert(`El total que usted va a pagar con el interes sumado de 100% es ${precioFinal} en 24 cuotas de un valor de ${valorCuotas.toFixed(1)}`)
            break;
        default:
            alert("Ingrese el plan de cuota correcto(6,12,18,24")
            break
    }

}

// opcion 3:elige un prestamo segun tasa de interes:
function filtrarPrestamosInteres(array) {
    let interesIngresado = prompt(`Ingrese la tasa de interes del prestamo que necesita o quiere buscar`)
    let buscar = array.filter((prestamos) => prestamos.tasaIntereses <= interesIngresado)
    if (buscar.length == 0) {
        alert(`No tenemos prestamos disponibles con esa tasa de interes`)
    } else {
        alert(`Si tenemos prestamos disponbiles menor o igual a esa tasa de interes`)
        verPrestamos(buscar)
    }
    if (validarInput(interesIngresado > 0)) {
        alert("La tasa de interes debe ser superior a 0.")
        tasaIntereses = parseInt(prompt("Ingrese la tasa de interes mayor a 0: "))
    }
}

//opcion 4: cancela el prestamo de las opciones disponibles  
function cancelarPrestamo(array) {
    //mostrar lista de prestamos  para que vea la id en consola y pueda elegir}
    let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))

    let arrayID = array.map(prestamo => prestamo.id)
    console.log(arrayID)

    let indice = arrayID.indexOf(eliminarID)
    console.log(indice)

    array.splice(indice, 1)
    prestamosDisponibles(array)
}


// opcion 5: for each para mostrar catalogo de prestamos disponibles
function verPrestamos(array) {
    array.forEach((prestamos) => console.log(`- El préstamo numero ${prestamos.id}: Monto de: ${prestamos.monto},con una tasa de Interés: ${prestamos.tasaIntereses}, en un plazo de : ${prestamos.plazo} cuotas`))
}

// estructura del menu de opciones principales//
let cerrarMenu = false

function menu() {

    let opcionesPrestamos = parseInt(prompt(`Ingrese la opción deseada
    
       1 - Simular tu prestamo instantaneo.
       2 - Calcular tu cuota mensual.
       3 -Busca prestamos por tasa de intereses.
       4 - Cancelar prestamo.
       5 - Ver opciones de prestamos disponibles.
       6- Salir del Menú`));

    switch (opcionesPrestamos) {
        case 1:
            simulacionPrestamos()
            break

        case 2:
            calcularCuotaMensual()
            break

        case 3:
            filtrarPrestamosInteres(listaPrestamos)
            break
        case 4:
            cancelarPrestamo(listaPrestamos)
            break


        case 5:
            prestamosDisponibles()
            break

        case 6:
            console.log("SALIR DEL MENU")
            cerrarMenu = true
            break

        default:
            alert("Opción no válida, ingrese un numero del 1 al 6")
            break
    }
}

while (!cerrarMenu) {
    menu()
}


