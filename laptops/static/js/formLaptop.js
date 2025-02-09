$(document).ready(function () {
    // Declaración de constantes
    const case_use = $('#id_use_case');
    const dynamicDiv = $('#dynamic-laptop-questions'); 
    const buttonPrev = $('#previusStep');
    const buttonNext = $('#nextStep');
    const buttonSend = $('#send');
    const firstDiv = $('#firtdiv');
    const buttonReview = $('#reviewButton');
    const Divreview = $('#review');
    const progressBar = $('#progress-bar');
    
    // Declaración de variables
    let Step = 0;
    let allStep = [];
    let allvalues = {
        Proposito: '',
        Rendimiento: '',
        Portabilidad: '',
        Presupuesto: '',
        Almacenamiento:'',
        Velocidad: '',
        Bateria:'',
        conexiones: [],
        CantPuertos: '',
        Extras: [],
        Marca:'',
        OtraMarca:''
    };

    // Array para guardar las preguntas con un número que indique su posición
    let questions = [
        { id: 'rendimiento', label: '1.1- ¿Qué potencia necesitas?', position: 1, options: [{text: 'bajo', value: 'bajo'}, {text: 'Medio', value: 'medio'}, {text: 'alto', value: 'alto'}, {text: 'Top', value: 'top'}] },
        { id: 'portabilidad', label: '2- ¿Qué tamaño de pantalla prefieres?', position: 2, options: [{text: 'Pequeño (entre 13 y 14 pulgadas)', value: 'pequeño'}, {text: 'Mediano (entre 14 y 16 pulgadas)', value: 'mediano'}, {text: 'Grande (17 pulgadas o mas)', value: 'grande'}] },
        { id: 'presupuesto', label: '3- ¿Cuál es tu presupuesto?', position: 3, options: [{text: 'bajo (Menos de 500€)', value: 'bajo'}, {text: 'medio (Entre 500 y 1000)', value: 'medio'}, {text: 'alto (Entre 1000 y 1500)', value: 'alto'}, {text: 'Muy alto (Mas de 2000)', value: 'muy_alto'}] },
        { id: 'almacenamiento', label: '4- ¿Qué capacidad de almacenamiento necesitas?', position: 4, options: [{text: '256 GB', value: '256'}, {text: '512 GB', value: '512'}, {text: '1 TB', value: '1024'}, {text: '2 TB', value: '2048'}] },
        { id: 'velocidad', label: '4.1 - ¿Qué velocidad de almacenamiento quieres?', position: 5, options: [{text: 'Hdd (Lento pero con alta capacidad de almacenamiento)', value: 'hdd'}, {text: 'Hibidro (Mezcla entre HDD y SSD)', value: 'hibidro'}, {text: 'Rapido (SSD)', value: 'ssd'}, {text: 'NoImporta', value: 'no_importa'}] },
        { id: 'bateria', label: '5- ¿Qué duración de batería necesitas?', position: 6, options: [{text: 'corta (Menos de 4 horas)', value: 'corta'}, {text: 'media (4-8 horas)', value: 'media'}, {text: 'larga (Más de 8 horas)', value: 'larga'}] },
        { id: 'conexiones', label: '6- ¿Qué tipo de conexiones necesitas?', position: 7, options: [{text: 'USB', value: 'usb'}, {text: 'HDMI', value: 'hdmi'}, {text: 'Ethernet', value: 'ethernet'}, {text: 'WiFi', value: 'wifi'}], type: 'checkbox' },
        { id: 'cantPuertos', label: '7- ¿Cuántos puertos necesitas?', position: 8, options: [{text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4'}] },
        { id: 'extras', label: '8- ¿Qué extras necesitas?', position: 9, options: [{text: 'Lector de huellas', value: 'lector'}, {text: 'Cámara web', value: 'camara'}, {text: 'Teclado retroiluminado', value: 'teclado'}, {text: 'Ninguno', value: 'ninguno'}], type: 'checkbox' },
        {id: 'marca', label: '9- ¿Tienes Preferencia de marca?', position: 10, options: [{text: 'HP', value: 'hp'}, {text: 'Lenovo', value: 'lenovo'}, {text: 'Asus', value: 'asus'}, {text: 'Acer', value: 'acer'}, {text: 'Dell', value: 'dell'}, {text: 'MSI', value: 'msi'}, {text: 'Apple', value: 'apple'}, {text: 'Otra', value: 'otra'}]},
        { id: 'otraMarca', label: '9.1- ¿Cuál es la marca de tu preferencia?', position: 11, type: 'text' }
    ];

    // Función para generar las preguntas dinámicamente
    function generateQuestion(step) {
        if (step < questions.length) {
            const question = questions.find(q => q.position === step);
            let opciones = `<label for="${question.id}">${question.label}</label>`;
            if (question.type === 'checkbox') {
                question.options.forEach(option => {
                    opciones += `<div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="${option.value}" id="${option.value}">
                                    <label class="form-check-label" for="${option.value}">
                                        ${option.text}
                                    </label>
                                </div>`;
                });
            } else if (question.type === 'text') {
                opciones += `<input type="text" id="${question.id}" name="${question.id}" class="form-control">`;
            } else {
                opciones += `<select id="${question.id}" name="${question.id}" class="form-select">`;
                question.options.forEach(option => {
                    opciones += `<option value="${option.value}">${option.text}</option>`;
                });
                opciones += `</select>`;
                if (question.id === 'marca') {
                    opciones += `<div id="otraMarcaDiv" style="display:none;">
                                    <label for="otraMarcaInput">Especifica la marca:</label>
                                    <input type="text" id="otraMarcaInput" class="form-control">
                                </div>`;
                }
            }
            dynamicDiv.empty();
            dynamicDiv.append(opciones);

            if (question.id === 'marca') {
                $('#marca').change(function() {
                    if ($(this).val() === 'otra') {
                        $('#otraMarcaDiv').show();
                    } else {
                        $('#otraMarcaDiv').hide();
                    }
                });
            }
        } else {
            dynamicDiv.empty();
        }
    }

    // Función que oculta los elementos según el paso en el que estén
    function hidden(step) {
        if (step === 0) {
            buttonPrev.css('display', 'none');
            buttonSend.css('display', 'none');
            case_use.css('display', 'block');
        } else if (step === questions.length) {
            buttonNext.css('display', 'none');
            buttonSend.css('display', 'none');
            buttonReview.css('display', 'inline');
            case_use.css('display', 'none');
            dynamicDiv.append();
        } else {
            buttonPrev.css('display', 'inline');
            buttonNext.css('display', 'inline');
            buttonSend.css('display', 'none');
            buttonReview.css('display', 'none');
            case_use.css('display', 'none');
        }
    }

    // Función para actualizar la barra de progreso
    function updateProgressBar(step) {
        const totalSteps = questions.length;
        const progress = (step / totalSteps) * 100;
        progressBar.css('width', `${progress}%`);
        progressBar.attr('aria-valuenow', progress);
    }

    // Función que nos lleva a la siguiente pregunta en el formulario
    function nextStep() {
        // Guardar el valor seleccionado en allvalues
        if (Step > 0) {
            const question = questions.find(q => q.position === Step);
            if (question.type === 'checkbox') {
                allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)] = [];
                question.options.forEach(option => {
                    if ($(`#${option.value}`).is(':checked')) {
                        allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)].push(option.value);
                        if (question.id === 'conexiones') {
                            allvalues.conexiones.push(option.value);
                        }
                    }
                });
            } else {
                allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)] = $(`#${question.id}`).val();
                if (question.id === 'marca' && $(`#${question.id}`).val() === 'otra') {
                    allvalues.OtraMarca = $('#otraMarcaInput').val();
                }
            }
        } else {
            allvalues.Proposito = case_use.val();
        }

        allStep.push(Step);
        Step += 1;
        if (Step > 0) {
            firstDiv.css('display', 'none');
        }

        generateQuestion(Step);
        hidden(Step);
        updateProgressBar(Step);
        console.log(allvalues);
    }

    // Función que nos lleva a la pregunta anterior en el formulario
    function previusStep() {
        if (Step > 0) {
            const question = questions.find(q => q.position === Step);
            if (question.type === 'checkbox') {
                allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)] = [];
            } else {
                allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)] = '';
                if (question.id === 'marca') {
                    allvalues.OtraMarca = '';
                }
            }

            Step -= 1;
            allStep.pop();
            dynamicDiv.empty();
            if (Step === 0) {
                case_use.css('display', 'block');
                firstDiv.css('display', 'block');
                Divreview.css('display', 'none');
            } else {
                generateQuestion(Step);
            }
            hidden(Step);
            Divreview.css('display', 'none'); // Ocultar el resumen de respuestas
            updateProgressBar(Step);
        }
        console.log(allvalues);
    }

    function review() {
        if (!Array.isArray(allvalues.conexiones)) {
            allvalues.conexiones = [];
        }
        if (!Array.isArray(allvalues.Extras)) {
            allvalues.Extras = [];
        }
        allvalues.conexiones = allvalues.conexiones.join(', ');
        allvalues.Extras = allvalues.Extras.join(', ');
        Divreview.empty();
        let marca = allvalues.Marca;
        if (allvalues.Marca === 'otra' && allvalues.OtraMarca.trim() !== '') {
            marca = allvalues.OtraMarca;
        }
        Divreview.append(`<h3>Resumen de tus respuestas</h3>
                            <p>Propósito: ${allvalues.Proposito}</p>
                            <p>Rendimiento: ${allvalues.Rendimiento}</p>
                            <p>Portabilidad: ${allvalues.Portabilidad}</p>
                            <p>Presupuesto: ${allvalues.Presupuesto}</p>
                            <p>Almacenamiento: ${allvalues.Almacenamiento}</p>
                            <p>Velocidad: ${allvalues.Velocidad}</p>
                            <p>Batería: ${allvalues.Bateria}</p>
                            <p>Conexiones: ${allvalues.conexiones}</p>
                            <p>Cantidad de puertos: ${allvalues.CantPuertos}</p>
                            <p>Extras: ${allvalues.Extras}</p>
                            <p>Marca elegida: ${marca}</p>`);
        firstDiv.css('display', 'none');
        Divreview.css('display', 'block'); // Mostrar el resumen de respuestas
    }

    // Evento para actualizar `casoDeUso` y pasar al siguiente paso
    buttonNext.click(function () {
        nextStep();
    });

    // Evento para el botón "Anterior"
    buttonPrev.click(function () {
        previusStep();
    });

    // Evento para el botón "Revisar"
    buttonReview.click(function () {
        review();
    });

    // Inicialización
    (function initialize() {
        hidden(Step);
        updateProgressBar(Step);
    })();
});