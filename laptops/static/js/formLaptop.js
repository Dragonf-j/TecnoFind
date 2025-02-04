$(document).ready(function () {
    // Declaración de constantes
    const case_use = $('#id_use_case');
    const dynamicDiv = $('#dynamic-laptop-questions'); 
    const buttonPrev = $('#previusStep');
    const buttonNext = $('#nextStep');
    const buttonSend = $('#send');
    const firstDiv = $('#firtdiv');
    
    // Declaración de variables
    let Step = 0;
    let allStep = [];
    let allvalues = {
        Proposito: '',
        Rendimiento: '',
        Portabilidad: '',
        Presupuesto: '',
        Almacenamiento:'',
        VelocidadDisco:'',
        Bateria:'',
        conexiones:'',
        CantPuertos: '',
        Extras:'',
        marca:''
    };

    // Función que oculta los elementos según el paso en el que estén
    function hidden(step) {
        if (step === 0) {
            buttonPrev.css('display', 'none');
            buttonSend.css('display', 'none');
            case_use.css('display', 'block');
        } else {
            buttonPrev.css('display', 'inline');
            buttonSend.css('display', 'none');
            case_use.css('display', 'none');
        }
    }

    // Función para manejar el rendimiento según el propósito
    function rendimiento(casoDeUso) {
        const opciones = `
            <label for="Rendimiento">1.1- ¿Qué potencia necesitas?</label>
            <select id="rendimiento" name="rendimiento">
                <option value="bajo">Rendimiento básico</option>
                <option value="Medio">Rendimiento medio</option>
                <option value="alto">Rendimiento alto</option>
                <option value="Top">Top</option>
            </select>
        `;
        dynamicDiv.empty();
        if (casoDeUso) {
            dynamicDiv.append(opciones);
            if (casoDeUso === "gaming") {
                dynamicDiv.append(`
                    <label for="Extras">Hercios (desde los 60 hasta 240)</label>
                    <input type="range" id="hz" name="hz" min="60" max="240">
                `);
            }
        } else {
            console.error("Error: casoDeUso no definido");
        }
    }

    function portatibilidad() {
        const opciones = `
            <label for="Portabilidad">3- ¿Qué tamaño de pantalla prefieres?</label>
            <select id="portabilidad" name="portabilidad">
                <option value="13">13"</option>
                <option value="15">15"</option>
                <option value="17">17"</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);

        // Agregar evento change para obtener el valor seleccionado
        $('#portabilidad').change(function() {
            const selectedValue = $(this).val();
            console.log('Tamaño de pantalla seleccionado:', selectedValue);
            allvalues.Portabilidad = selectedValue; // Guardar el valor en allvalues
        });
    }

    function presupuesto() {
        const opciones = `
            <label for="Presupuesto">4- ¿Cuál es tu presupuesto?</label>
            <select id="presupuesto" name="presupuesto">
                <option value="bajo">Bajo (Menos de 500€)</option>
                <option value="medio">Entre 500 y 1000</option>
                <option value="alto">Entre 1000 y 1500</option>
                <option value="Muy alto">Mas de 2000</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function almacenamiento() {
        const opciones = `
            <label for="Almacenamiento">5- ¿Qué capacidad de almacenamiento necesitas?</label>
            <select id="almacenamiento" name="almacenamiento">
                <option value="bajo">256 GB</option>
                <option value="medio">512 GB</option>
                <option value="alto">1 TB</option>
                <option value="Muy alto">2 TB</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function velocidadAlmacenamiento() {
        const opciones = `
            <label for="Velocidad">5.1 - ¿Qué velocidad de almacenamiento quieres?</label>
            <select id="velocdad" name="velocidad">
                <option value="tortuga">Hdd (Lento pero con alta capacidad de almacenamiento)</option>
                <option value="Hibidro">Mezcla entre HDD y SSD (Combina lo mejor de ambos mundos)</option>
                <option value="Rapido">SSD (Muy rapido)</option>
                <option value="NoImporta">No tiene importancia</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function bateria() {
        const opciones = `
            <label for="Bateria">6- ¿Qué duración de batería necesitas?</label>
            <select id="bateria" name="bateria">
                <option value="corta">Corta (Menos de 4 horas)</option>
                <option value="media">Media (4-8 horas)</option>
                <option value="larga">Larga (Más de 8 horas)</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function conexiones() {
        const opciones = `
            <label for="conexiones">7- ¿Qué tipo de conexiones necesitas?</label>
            <select id="conexiones" name="conexiones">
                <option value="usb">USB</option>
                <option value="hdmi">HDMI</option>
                <option value="ethernet">Ethernet</option>
                <option value="wifi">WiFi</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function cantPuertos() {
        const opciones = `
            <label for="CantPuertos">8- ¿Cuántos puertos necesitas?</label>
            <select id="cantPuertos" name="cantPuertos">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function extras() {
        const opciones = `
            <label for="Extras">9- ¿Qué extras necesitas?</label>
            <select id="extras" name="extras">
                <option value="lector">Lector de huellas</option>
                <option value="camara">Cámara web</option>
                <option value="teclado">Teclado retroiluminado</option>
                <option value="ninguno">Ninguno</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
    }

    function prefenciaMarca(){
        const opciones = `<label for="Preferencia">2- ¿Tienes preferencia por alguna marca?</label>
        <select id="preferencia" name="preferencia">
                <option value="Si">Si </option>
                <option value="No">No</option>
            </select>
        `;
        dynamicDiv.empty();
        dynamicDiv.append(opciones);
        $('#preferencia').change(function() {
            if($(this).val() === "Si"){
                dynamicDiv.append(`
                    <label for="marca">2.1- ¿Qué marca prefieres?</label>
                    <input type="text" name="marca" id="marca">
                `);
            } else {
                $('#marca').parent().remove();
            }
        });
    }

    function llamadaOpciones(allStep, allvalues) {
        switch(allStep) {
            case 0:
                allvalues.Proposito = casoDeUso;
                break;
            case 1:
                rendimiento(casoDeUso);
                allvalues.Rendimiento = $('#rendimiento').val();
                break;
            case 2:
                prefenciaMarca();
                allvalues.marca = $('#marca').val();
                break;
            case 3:
                portatibilidad();
                allvalues.Portabilidad =$('#portabilidad').val();
                break;
            case 4:
                presupuesto();
                allvalues.Presupuesto = $('#presupuesto').val();
                break;
            case 5:
                almacenamiento();
                allvalues.Almacenamiento = $('#almacenamiento').val();
                break;
            case 6:
                velocidadAlmacenamiento();
                allvalues.VelocidadDisco = $('#velocdad').val();
                break;
            case 7:
                bateria();
                allvalues.Bateria = $('#bateria').val();
                break;
            case 8:
                conexiones();
                allvalues.conexiones = $('#conexiones').val();
                break;
            case 9:
                cantPuertos();
                allvalues.CantPuertos = $('#cantPuertos').val();
                break;
            case 10:
                extras();
                allvalues.Extras = $('#extras').val();
                console.log(allvalues);
                break;
        }
    }

    // Función que nos lleva a la siguiente pregunta en el formulario
    function nextStep() {
        allStep.push(Step);
        Step += 1;
        allvalues.Proposito = casoDeUso;
        
        llamadaOpciones(Step, allvalues);
        hidden(Step);
        if (Step > 0) {
            firstDiv.css('display', 'none');
        }
    }

    // Función que nos lleva a la pregunta anterior en el formulario
    function previusStep() {
        if (Step > 0) {
            Step -= 1;
            allStep.pop();
            // Eliminar el último valor de allvalues
            switch(Step) {
                case 0:
                    allvalues.Proposito = '';
                    break;
                case 1:
                    allvalues.Rendimiento = '';
                    break;
                case 2:
                    allvalues.marca = '';
                    break;
                case 3:
                    allvalues.Portabilidad = '';
                    break;
                case 4:
                    allvalues.Presupuesto = '';
                    break;
                case 5:
                    allvalues.Almacenamiento = '';
                    break;
                case 6:
                    allvalues.VelocidadDisco = '';
                    break;
                case 7:
                    allvalues.Bateria = '';
                    break;
                case 8:
                    allvalues.conexiones = '';
                    break;
                case 9:
                    allvalues.CantPuertos = '';
                    break;
                case 10:
                    allvalues.Extras = '';
                    break;
            }
            dynamicDiv.empty();
            if (Step === 0) {
                case_use.css('display', 'block');
                firstDiv.css('display', 'block');
            } else {
                llamadaOpciones(Step, allvalues);
            }
            hidden(Step);
        }
    }

    // Evento para actualizar `casoDeUso` y pasar al siguiente paso
    buttonNext.click(function () {
        casoDeUso = case_use.val();
        nextStep();
    });

    // Evento para el botón "Anterior"
    buttonPrev.click(function () {
        previusStep();
    });

    // Inicialización
    (function initialize() {
        hidden(Step);
    })();
});
