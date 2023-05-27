export interface IPdfCotizacion {
    // basicos del paquete
    iconoPaquete: string
    nombrePaquete: string

    // costos
    moneda: string
    costoInicial: string
    precioSegundoAno: string
    modalidadPagoMembresia: string
    modalidadPagoImplementacion: string
    costoImplementacion: string
    costoMembresia: string
    costoUsuarios: string
    costoTimbres: string

    // cantidades
    cantidadTimbres: string
    cantidadSucursales: string
    cantidadUsuarios: string
    cantidadEmpleados: string

    costoUsuarioExtra: string

    // modalidades pagos
    memebresia: string
    implementacion: string
}
