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

    // Array para guardar las preguntas
    let questions = [
        { id: 'rendimiento', label: '1.1- ¿Qué potencia necesitas?', options: [{text: 'bajo', value: 'bajo'}, {text: 'Medio', value: 'medio'}, {text: 'alto', value: 'alto'}, {text: 'Top', value: 'top'}] },
        { id: 'portabilidad', label: '2- ¿Qué tamaño de pantalla prefieres?', options: [{text: 'Pequeño (entre 13 y 14 pulgadas)', value: 'pequeño'}, {text: 'Mediano (entre 14 y 16 pulgadas)', value: 'mediano'}, {text: 'Grande (17 pulgadas o mas)', value: 'grande'}] },
        { id: 'presupuesto', label: '3- ¿Cuál es tu presupuesto?', options: [{text: 'bajo (Menos de 500€)', value: 'bajo'}, {text: 'medio (Entre 500 y 1000)', value: 'medio'}, {text: 'alto (Entre 1000 y 1500)', value: 'alto'}, {text: 'Muy alto (Mas de 2000)', value: 'muy_alto'}] },
        { id: 'almacenamiento', label: '4- ¿Qué capacidad de almacenamiento necesitas?', options: [{text: '256 GB', value: '256'}, {text: '512 GB', value: '512'}, {text: '1 TB', value: '1024'}, {text: '2 TB', value: '2048'}] },
        { id: 'velocidad', label: '4.1 - ¿Qué velocidad de almacenamiento quieres?', options: [{text: 'Hdd (Lento pero con alta capacidad de almacenamiento)', value: 'hdd'}, {text: 'Hibidro (Mezcla entre HDD y SSD)', value: 'hibidro'}, {text: 'Rapido (SSD)', value: 'ssd'}, {text: 'NoImporta', value: 'no_importa'}] },
        { id: 'bateria', label: '5- ¿Qué duración de batería necesitas?', options: [{text: 'corta (Menos de 4 horas)', value: 'corta'}, {text: 'media (4-8 horas)', value: 'media'}, {text: 'larga (Más de 8 horas)', value: 'larga'}] },
        { id: 'conexiones', label: '6- ¿Qué tipo de conexiones necesitas?', options: [{text: 'USB', value: 'usb'}, {text: 'HDMI', value: 'hdmi'}, {text: 'Ethernet', value: 'ethernet'}, {text: 'WiFi', value: 'wifi'}] },
        { id: 'cantPuertos', label: '7- ¿Cuántos puertos necesitas?', options: [{text: '1', value: '1'}, {text: '2', value: '2'}, {text: '3', value: '3'}, {text: '4', value: '4'}] },
        { id: 'extras', label: '8- ¿Qué extras necesitas?', options: [{text: 'Lector de huellas', value: 'lector'}, {text: 'Cámara web', value: 'camara'}, {text: 'Teclado retroiluminado', value: 'teclado'}, {text: 'Ninguno', value: 'ninguno'}] }
    ];

    // Función para generar las preguntas dinámicamente
    function generateQuestion(step) {
        if (step < questions.length) {
            const question = questions[step];
            let opciones = `<label for="${question.id}">${question.label}</label><select id="${question.id}" name="${question.id}" class="form-select">`;
            question.options.forEach(option => {
                opciones += `<option value="${option.value}">${option.text}</option>`;
            });
            opciones += `</select>`;
            dynamicDiv.empty();
            dynamicDiv.append(opciones);
        }
    }

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

    // Función que nos lleva a la siguiente pregunta en el formulario
    function nextStep() {
        // Guardar el valor seleccionado en allvalues
        if (Step > 0) {
            const question = questions[Step - 1];
            allvalues[question.id.charAt(0).toUpperCase() + question.id.slice(1)] = $(`#${question.id}`).val();
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
        console.log(allvalues);
    }

    // Función que nos lleva a la pregunta anterior en el formulario
    function previusStep() {
        if (Step > 0) {
            Step -= 1;
            allStep.pop();
            dynamicDiv.empty();
            if (Step === 0) {
                case_use.css('display', 'block');
                firstDiv.css('display', 'block');
            } else {
                generateQuestion(Step);
            }
            hidden(Step);
        }
        console.log(allvalues);
    }

    // Evento para actualizar `casoDeUso` y pasar al siguiente paso
    buttonNext.click(function () {
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