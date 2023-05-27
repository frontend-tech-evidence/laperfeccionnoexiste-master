# Evidence V2

¡Comienza tu cotizacion gratuita ahora!

-   Solamente meter cosas en la carpeta root que sean reutilizables de manera global. En caso de que solo se utilicen en un solo lugar, crear una carpeta para ese lugar.

    // Datos que se guardan para ajax
    const data = {
    toClient: true,
    toPDF: false,
    languages: false,
    contratacion: false,
    //
    nombre: $('#inputNombre').html(),
        telefono: $('#inputTelefono').html(),
        email: $('#inputEmail').html(),
        distribuidor: $('#inputDistribuidor').html(),
        nombreEmpresa: $('#inputEmpresa').html(),
        campoObservaciones: $('#inputObservaciones').html(),
        // Paquete
        nombrePaquete: localStorage.getItem('nombrePaqueteSeleccionado'),
        language: localStorage.getItem('idioma'),
        fecha: localStorage.getItem('fecha'),
        // enlace:
        precioTotalSegundoAnioPaqueteSeleccionado: localStorage.getItem(
            'precioTotalSegundoAnioPaqueteSeleccionado'
        ),
        precioTotalPaqueteSeleccionado: localStorage.getItem(
            'precioTotalPaqueteSeleccionado'
        ),
        //Inputs
        inputPagoInstalacion: localStorage.getItem('inputPagoInstalacion'),
        inputPagoRenta: localStorage.getItem('inputPagoRenta'),
        inputEmpleados: localStorage.getItem('inputEmpleados'),
        inputTimbres: localStorage.getItem('inputTimbres'),
        inputSucursales: localStorage.getItem('inputSucursales'),
        inputUsuarios: localStorage.getItem('inputUsuarios'),
        precioPorUsuario: localStorage.getItem(
            `costoUsuarioExtra${paqueteSeleccionado}`
    ),
    }

    /\*\*

    -   @author Arciniega Lauradesu
    -   @description Manda los datos necesarios para el pdf, si un dato falta aqui, te marca error al querer descargarlo. El ajax es para que se envie
    -   simulataneamente el correo al de contacto@evidencetec.com
        \*/

    const paqueteSeleccionado = localStorage.getItem(
    'nombrePaqueteSeleccionado'
    )
    const moneda = localStorage.getItem('moneda')

    $(document).on('click', '.btn_generate_pdf', (e) => {
    e.preventDefault()
    var moreInputs = $('.important_hidden_data').html()

        // ---------- Extras (conectadas al boton que seleccionen en contratar.) ----------
        moreInputs +=
            '<input type="hidden" name="toClient"              value="true">'
        moreInputs +=
            '<input type="hidden" name="contratacion"          value="false">'
        moreInputs +=
            '<input type="hidden" name="toPDF"                 value="true">'

        // Hacer el nombre capitalize
        const nombrePaqueteSeleccionado = localStorage.getItem('paqueteGanador')
        const texto = nombrePaqueteSeleccionado
        const textoMayus =
            texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()

        moreInputs +=
            '<input type="hidden" name="nombrePaquete"         value="' +
            textoMayus +
            '">'

        // ---------- Datos del formulario ----------
        moreInputs +=
            '<input type="hidden" name="nombreEmpresa"         value="' +
            $('#inputEmpresa').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="nombre"         value="' +
            $('#inputNombre').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="telefono"         value="' +
            $('#inputTelefono').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="email"             value="' +
            $('#inputEmail').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="distribuidor"         value="' +
            $('#inputDistribuidor').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="language"         value="' +
            localStorage.getItem('idioma') +
            '">'

        moreInputs +=
            '<input type="hidden" name="campoObservaciones"         value="' +
            $('#inputObservaciones').val() +
            '">'

        moreInputs +=
            '<input type="hidden" name="fecha"         value="' +
            localStorage.getItem('fecha') +
            '">'

        moreInputs +=
            '<input type="hidden" name="enlace"         value="' +
            '<a href=>Link</a>' +
            '">'

        // ---------- Info de inputs ----------

        const inputValue = localStorage.getItem(
            'precioTotalSegundoAnioPaqueteSeleccionado'
        )
        const aux = parseInt(inputValue).toLocaleString()

        const inputValue2 = localStorage.getItem(
            'precioTotalPaqueteSeleccionado'
        )
        const aux2 = parseInt(inputValue2).toLocaleString()

        // Precios del paquete seleccionado.
        moreInputs +=
            '<input type="hidden" name="precioTotalSegundoAnioPaqueteSeleccionado"            value="' +
            aux +
            ' ' +
            moneda +
            '. (IVA incluido.)' +
            '">'

        moreInputs +=
            '<input type="hidden" name="precioTotalPaqueteSeleccionado"            value="' +
            aux2 +
            ' ' +
            moneda +
            '. (IVA incluido.)' +
            '">'

        // Formas de pago seleccionadas en el cotizador.
        let pagoRenta = localStorage.getItem('inputPagoRenta')
        let pagoImplementacion = localStorage.getItem('inputPagoInstalacion')

        if (pagoRenta === '12') {
            pagoRenta = 'Mensual'
        } else {
            pagoRenta = 'Anual'
        }

        if (pagoImplementacion === '12') {
            pagoImplementacion = '12 meses'
        } else {
            pagoImplementacion = '1 año'
        }

        moreInputs +=
            '<input type="hidden" name="inputPagoInstalacion"        value="' +
            pagoImplementacion +
            '">'

        moreInputs +=
            '<input type="hidden" name="inputPagoRenta"            value="' +
            pagoRenta +
            '">'

        // Cantidades de inputs introducidas en el cotizador.
        moreInputs +=
            '<input type="hidden" name="inputEmpleados"        value="' +
            localStorage.getItem('inputEmpleados') +
            '">'

        moreInputs +=
            '<input type="hidden" name="inputTimbres"        value="' +
            localStorage.getItem('inputTimbres') +
            '">'

        moreInputs +=
            '<input type="hidden" name="inputSucursales"         value="' +
            localStorage.getItem('inputSucursales') +
            '">'

        moreInputs +=
            '<input type="hidden" name="inputUsuarios"        value="' +
            localStorage.getItem('inputUsuarios') +
            '">'

        // Costo de usuario extra

        moreInputs +=
            '<input type="hidden" name="precioPorUsuario"         value="' +
            localStorage.getItem(`costoUsuarioExtra${paqueteSeleccionado}`) +
            ' ' +
            moneda +
            '.' +
            '">'

        $('form.important_hidden_data').html(moreInputs)
        $('form.important_hidden_data').submit()

        // Esto es aparte. Enviar datos al pdf
        $.ajax({
            url: 'sendPackageData',
            type: 'POST',
            data: data,
        })

    })

    /_ ------------------------------------------------------------------------------------------------ _/

    /\*\*

    -   @author Arciniega Lauradesu
    -   @description Envia los datos del cliente y la cotización a los correos de ambos, o en todo caso solo a Evidence.
        \*/
        $(document).on('submit', '#contactPackageForm', (e) => {
        let correctlySend = true,
        texto,
        sendToClient = true
        e.preventDefault()

            // if ($("#sendEmailToClient").is(":checked")) {
            //     sendToClient = true;
            // }

            // if ($('#sendEmailToClient').is(':checked')) {
            $.ajax({
                url: 'sendPackageData',
                type: 'POST',
                data: data,

                // // Lo que se muestra dependiendo si es con exito o no.
                // beforeSend: () => {
                //     texto = language ? "Procesando..." : "Processing...";
                //     $("#send").attr("value", texto);
                //     $("#send").prop("disabled", true);
                // },
                // success: (response) => {
                //     if (response && correctlySend) {
                //         $(window).scrollTop(0);
                //         $("#sendEmail")
                //             .addClass("active")
                //             .css({ height: $(window).height() + "px" });
                //     } else {
                //         texto = language
                //             ? 'Algo ha salido mal, descargue su cotización y <a href="/contacto" class="text-primary fw-bold">contacte</a> al departamento de ventas para aclarar la situación'
                //             : 'Something has gone wrong, download your quote and <a href="/contact" class="text-primary fw-bold">contact</a> the sales department for clarification.';
                //         $(".failed").css({ display: "block" });
                //         $(".failed").html(texto);
                //     }
                // },
            })

        })

    /\*\*

    -   @author Arciniega Lauradesu
    -   @description Este formulario va en conjunto con la funcion del boton ".btn_generate_pdf", solo envia los datos que se almancenaron en el formulario
        \*/

    // $(document).on("submit", "form.important_hidden_data", () => {
    //     $(this).serialize();
    // });
    $(document).on('submit', 'form.important_hidden_data', function () {
    $(this).serialize()
    })
