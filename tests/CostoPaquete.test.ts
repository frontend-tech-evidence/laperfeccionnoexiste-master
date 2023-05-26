/**
 * @author Raul Galindo
 * @description Test for
 */

function calcularCostoImplementacion(
    costoActivacion,
    costoMigracion,
    costoCapacitacion,
    isPagoMensual = false
) {
    const costoTotal = costoActivacion + costoMigracion + costoCapacitacion
    const numeroMeses = 12
    if (isPagoMensual) {
        return costoTotal / numeroMeses
    }
    return costoTotal
}

function calcularCostoCapacitacion(
    cantidadUsuariosRequeridos: number,
    usuariosGratisDeCapacitacion: number,
    costoCapacitacionBase: number,
    costoCapacitacionUsuarioExtra: number
): number {
    if (cantidadUsuariosRequeridos > usuariosGratisDeCapacitacion) {
        let cantidadUsuariosExtras =
            cantidadUsuariosRequeridos - usuariosGratisDeCapacitacion
        const costoUsuariosExtrasCapacitaciones =
            cantidadUsuariosExtras * costoCapacitacionUsuarioExtra

        return costoCapacitacionBase + costoUsuariosExtrasCapacitaciones
    }

    return costoCapacitacionBase
}

function calcularCostoMembresia(costoBaseMensual, isPagoMensual = false) {
    const numeroMeses = 12
    if (isPagoMensual) {
        return costoBaseMensual
    }

    return costoBaseMensual * numeroMeses
}

function calcularCostoTimbres(
    timbresRequeridos,
    timbresGratis,
    precioTimbreExtra
) {
    let costoTotal = 0
    if (timbresRequeridos > timbresGratis) {
        costoTotal = (timbresRequeridos - timbresGratis) * precioTimbreExtra
        return costoTotal
    }
    return costoTotal
}

function calcularCostoFacturacionAnual(costoBaseMensual) {
    const mesesDelAño = 12
    return costoBaseMensual * mesesDelAño
}

function calcularCostoUsuario(
    cantidadUsuariosRequeridos,
    cantidadUsuariosGratisIncluidos,
    costoUsuarioExtra,
    hasPrecioUsuarioExtraVariable = false,
    costoUsuarioExtraDespuesDeLimite,
    cantidadDeUsuariosAntesDelDescuento
) {
    if (hasPrecioUsuarioExtraVariable) {
        if (cantidadUsuariosRequeridos > cantidadDeUsuariosAntesDelDescuento) {
            const cantidadAntesDelRango =
                cantidadDeUsuariosAntesDelDescuento -
                cantidadUsuariosGratisIncluidos
            const cantidadDespuesDelRango =
                cantidadUsuariosRequeridos - cantidadDeUsuariosAntesDelDescuento
            const costoDespuesDelLimite =
                cantidadDespuesDelRango * costoUsuarioExtraDespuesDeLimite
            const costoAntesDelLimite =
                cantidadAntesDelRango * costoUsuarioExtra
            return costoDespuesDelLimite + costoAntesDelLimite
        }
    }
    const costo = Math.abs(
        (cantidadUsuariosGratisIncluidos - cantidadUsuariosRequeridos) *
            costoUsuarioExtra
    )
    return costo
}

function calcularCostoPrimerAno(
    costoBase,
    isImplementacionMensual,
    isRentaMensual,
    costoImplementacion,
    costoMembresia,
    costoTimbres,
    costoUsuarios
) {
    if (!isImplementacionMensual) {
        costoMembresia = costoMembresia - costoBase
    }

    let costoTotalFinal = Math.floor(
        costoImplementacion + costoMembresia + costoTimbres + costoUsuarios
    )

    if (!isRentaMensual) {
        costoTotalFinal = Math.floor(costoTotalFinal * 0.9)
    }

    return costoTotalFinal
}

function calcularCostoSegundoAno(costoMembresia, costoTimbres, costoUsuarios) {
    return Math.round(costoMembresia + costoTimbres + costoUsuarios)
}


describe('Calcular costos de paquetes', () => {
    describe('🎨 Paquete Institutional', () => {        
        
        describe('🕹 Implementacion', () => { 
            it('Costo implementacion mensual con 21 usuarios (1 extra de capacitacion)', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            21, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        true //isPagoImplementacionMensual
                    )
                ).toBe(4791.583333333333)
            })

            it('Costo implementacion mensual con 30 usuarios (1 extra de capacitacion)', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            30, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        true //isPagoImplementacionMensual
                    )
                ).toBe(5165.833333333333)
            })

            it('Costo implementacion mensual con 10 usuarios', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            10, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        true //isPagoImplementacionMensual
                    )
                ).toBe(4750)
            })

            it('Costo implementacion anual con 21 usuarios (1 extra de capacitacion)', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            21, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        false //isPagoImplementacionMensual
                    )
                ).toBe(57499)
            })

            it('Costo implementacion mensual con 30 usuarios (1 extra de capacitacion)', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            30, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        false //isPagoImplementacionMensual
                    )
                ).toBe(61990)
            })

            it('Costo implementacion mensual con 10 usuarios', () => {
                expect(
                    calcularCostoImplementacion(                   
                        19000,  // precioActivacion                   
                        19000,  // precioMigracion,
                        calcularCostoCapacitacion(
                            10, //cantidadUsuariosRequeridos
                            20, //usuariosGratisDeCapacitacion
                            19000,//precioCapacitacion
                            499,//costoCapacitacionUsuarioExtra
                        ),                    
                        false //isPagoImplementacionMensual
                    )
                ).toBe(57000)
            })
        })

        describe('🕹 Costo de membresia', () => { 
            it('Costo membresia mensual', () => {
                expect(
                    calcularCostoMembresia(                   
                        8990,  // costoBaseMensual                   
                        true,  // isPagoMembresiaMensual
                    )
                ).toBe(8990)
            })   
            
            it('Costo membresia anual', () => {
                expect(
                    calcularCostoMembresia(                   
                        8990,  // costoBaseMensual                   
                        false,  // isPagoMembresiaMensual
                    )
                ).toBe(107880)
            }) 
   
        })

        describe('🕹 Costo de timbres', () => { 
            it('Costo 100 timbres', () => {
                expect(
                    calcularCostoTimbres(                   
                       100, // timbresRequeridos
                       100, // timbresGratis
                       1,  // precioTimbreExtra
                    )
                ).toBe(0)
            }) 

            it('Costo 101 timbres', () => {
                expect(
                    calcularCostoTimbres(                   
                       101, // timbresRequeridos
                       100, // timbresGratis
                       1,  // precioTimbreExtra
                    )
                ).toBe(1)
            }) 

            it('Costo 1 timbres', () => {
                expect(
                    calcularCostoTimbres(                   
                       1, // timbresRequeridos
                       100, // timbresGratis
                       1,  // precioTimbreExtra
                    )
                ).toBe(0)
            }) 
   
        })

        describe('🕹 Costo de facturacion anual', () => { 
            it('12 meses', () => {
                expect(
                    calcularCostoFacturacionAnual(                   
                        8990 // costoBaseMensual
                    )
                ).toBe(107880)
            })      
        })

        describe('🕹 Costo de usuarios', () => { 
            it('20 usuarios', () => {
                expect(
                    calcularCostoUsuario(                   
                       20, // cantidadUsuariosRequeridos
                       1, // cantidadUsuariosGratisIncluidos
                       716, // costoUsuarioExtra
                       false, // hasPrecioUsuarioExtraVariable = false
                       716, // costoUsuarioExtraDespuesDeLimite
                        1 // cantidadDeUsuariosAntesDelDescuento  
                    )
                ).toBe(13604)
            })
            
            it('1 usuarios', () => {
                expect(
                    calcularCostoUsuario(                   
                       1, // cantidadUsuariosRequeridos
                       1, // cantidadUsuariosGratisIncluidos
                       716, // costoUsuarioExtra
                       false, // hasPrecioUsuarioExtraVariable = false
                       716, // costoUsuarioExtraDespuesDeLimite
                        1 // cantidadDeUsuariosAntesDelDescuento  
                    )
                ).toBe(0)
            })
            
            it('Precio variable 50 usuarios - Manufacturing', () => {
                expect(
                    calcularCostoUsuario(                   
                       50, // cantidadUsuariosRequeridos
                       1, // cantidadUsuariosGratisIncluidos
                       716, // costoUsuarioExtra
                       true, // hasPrecioUsuarioExtraVariable = false
                       499, // costoUsuarioExtraDespuesDeLimite
                        49 // cantidadDeUsuariosAntesDelDescuento  
                    )
                ).toBe(34867)
            })   
        })

        describe('🕹 Costo de primer año', () => { 
            it('12 mensual ambos, con 21 usuarios, 100 timbres', () => {
                expect(
                    calcularCostoPrimerAno(                   
                        8990, // costoBase
                        true, // isImplementacionMensual
                        true, // isRentaMensual
                        calcularCostoImplementacion(                   
                            19000,  // precioActivacion                   
                            19000,  // precioMigracion,
                            calcularCostoCapacitacion(
                                21, //cantidadUsuariosRequeridos
                                20, //usuariosGratisDeCapacitacion
                                19000,//precioCapacitacion
                                499,//costoCapacitacionUsuarioExtra
                            ),                    
                            true //isPagoImplementacionMensual
                        ), // costoImplementacion
                        calcularCostoMembresia(                   
                            8990,  // costoBaseMensual                   
                            true,  // isPagoMembresiaMensual
                        ),// costoMembresia
                        calcularCostoTimbres(                   
                            100, // timbresRequeridos
                            100, // timbresGratis
                            1,  // precioTimbreExtra
                         ),// costoTimbres
                         calcularCostoUsuario(                   
                            21, // cantidadUsuariosRequeridos
                            1, // cantidadUsuariosGratisIncluidos
                            716, // costoUsuarioExtra
                            false, // hasPrecioUsuarioExtraVariable = false
                            716, // costoUsuarioExtraDespuesDeLimite
                             1 // cantidadDeUsuariosAntesDelDescuento  
                         )// costoUsuarios
                    )
                ).toBe(28101)
            })
            
            it('12 mensual ambos, con 29 usuarios, 100 timbres', () => {
                expect(
                    calcularCostoPrimerAno(                   
                        8990, // costoBase
                        true, // isImplementacionMensual
                        true, // isRentaMensual
                        calcularCostoImplementacion(                   
                            19000,  // precioActivacion                   
                            19000,  // precioMigracion,
                            calcularCostoCapacitacion(
                                29, //cantidadUsuariosRequeridos
                                20, //usuariosGratisDeCapacitacion
                                19000,//precioCapacitacion
                                499,//costoCapacitacionUsuarioExtra
                            ),                    
                            true //isPagoImplementacionMensual
                        ), // costoImplementacion
                        calcularCostoMembresia(                   
                            8990,  // costoBaseMensual                   
                            true,  // isPagoMembresiaMensual
                        ),// costoMembresia
                        calcularCostoTimbres(                   
                            100, // timbresRequeridos
                            100, // timbresGratis
                            1,  // precioTimbreExtra
                         ),// costoTimbres
                         calcularCostoUsuario(                   
                            29, // cantidadUsuariosRequeridos
                            1, // cantidadUsuariosGratisIncluidos
                            716, // costoUsuarioExtra
                            false, // hasPrecioUsuarioExtraVariable = false
                            716, // costoUsuarioExtraDespuesDeLimite
                             1 // cantidadDeUsuariosAntesDelDescuento  
                         )// costoUsuarios
                    )
                ).toBe(34162)
            }) 
        })
       
        describe('🕹 Costo de segundo año', () => { 
            it('21 usuarios, 100 timbres y membresia mensual', () => {
                expect(
                    calcularCostoSegundoAno(                                     
                        calcularCostoMembresia(                   
                            8990,  // costoBaseMensual                   
                            true,  // isPagoMembresiaMensual
                        ),// costoMembresia
                        calcularCostoTimbres(                   
                            100, // timbresRequeridos
                            100, // timbresGratis
                            1,  // precioTimbreExtra
                         ),// costoTimbres
                         calcularCostoUsuario(                   
                            21, // cantidadUsuariosRequeridos
                            1, // cantidadUsuariosGratisIncluidos
                            716, // costoUsuarioExtra
                            false, // hasPrecioUsuarioExtraVariable = false
                            716, // costoUsuarioExtraDespuesDeLimite
                             1 // cantidadDeUsuariosAntesDelDescuento  
                         )// costoUsuarios
                    )
                ).toBe(23310)
            })
            
            it('29 usuarios, 100 timbres y membresia mensual', () => {
                expect(
                    calcularCostoSegundoAno(                                     
                        calcularCostoMembresia(                   
                            8990,  // costoBaseMensual                   
                            true,  // isPagoMembresiaMensual
                        ),// costoMembresia
                        calcularCostoTimbres(                   
                            100, // timbresRequeridos
                            100, // timbresGratis
                            1,  // precioTimbreExtra
                         ),// costoTimbres
                         calcularCostoUsuario(                   
                            29, // cantidadUsuariosRequeridos
                            1, // cantidadUsuariosGratisIncluidos
                            716, // costoUsuarioExtra
                            false, // hasPrecioUsuarioExtraVariable = false
                            716, // costoUsuarioExtraDespuesDeLimite
                             1 // cantidadDeUsuariosAntesDelDescuento  
                         )// costoUsuarios
                    )
                ).toBe(29038)
            })       
        })     
    })

    // describe('🎨 Test Randoms', () => {        
         
    //     describe('🕹🕹 Costo de primer año manufacturing', () => { 
    //         it('12 mensual ambos, con 1 usuarios, 100 timbres', () => {
    //             expect(
    //                 calcularCostoPrimerAno(                   
    //                     14990, // costoBase
    //                     false, // isImplementacionMensual **
    //                     true, // isRentaMensual
    //                     calcularCostoImplementacion(                   
    //                         19000,  // precioActivacion                   
    //                         29000,  // precioMigracion,
    //                         calcularCostoCapacitacion(
    //                             1, //cantidadUsuariosRequeridos
    //                             20, //usuariosGratisDeCapacitacion
    //                             49000,//precioCapacitacion
    //                             924,//costoCapacitacionUsuarioExtra
    //                         ),                    
    //                         false //isPagoImplementacionMensual **
    //                     ), // costoImplementacion
    //                     calcularCostoMembresia(                   
    //                         14990,  // costoBaseMensual                   
    //                         true,  // isPagoMembresiaMensual
    //                     ),// costoMembresia
    //                     calcularCostoTimbres(                   
    //                         100, // timbresRequeridos
    //                         100, // timbresGratis
    //                         1,  // precioTimbreExtra
    //                      ),// costoTimbres
    //                      calcularCostoUsuario(                   
    //                         1, // cantidadUsuariosRequeridos
    //                         1, // cantidadUsuariosGratisIncluidos
    //                         829, // costoUsuarioExtra
    //                         true, // hasPrecioUsuarioExtraVariable = false
    //                         499, // costoUsuarioExtraDespuesDeLimite
    //                          49 // cantidadDeUsuariosAntesDelDescuento  
    //                      )// costoUsuarios
    //                 )
    //             ).toBe(169166)
    //         })
         
    //     })
            
    // })
   
})


