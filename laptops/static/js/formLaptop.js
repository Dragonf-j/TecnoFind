$(document).ready(function () {

    // Declaración de constantes
    const case_use = $('#id_use_case');
    const dynamicDiv = $('#dynamic-laptop-questions'); 
    const buttonPrev = $('#previusStep');
    const buttonNext = $('#nextStep');
    const buttonSend = $('#send');

    // Declaración de variables
    let Step = 0;
    let allStep = [];
    let allvalues = [];
    let proposito = '';

    // Función que nos lleva a la siguiente pregunta en el formulario
    function nextStep() {
        allStep.push(Step);
        Step += 1; // Corrige el incremento
        allvalues.push(proposito);
        rendimiento(proposito); // Llama a la función con el valor correcto
    }

    // Función que oculta los elementos según el paso en el que estén
    function hidden(step) {
        if (step === 0) {
            buttonPrev.css('display', 'none');
            buttonSend.css('display', 'none');
        } else {
            buttonSend.css('display', 'none');
            case_use.css('display', 'none');
        }
    }

    // Función para manejar el rendimiento según el propósito
    function rendimiento(proposito) {
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
        if (proposito) {
            dynamicDiv.append(opciones);
            if (proposito === "gaming") {
                dynamicDiv.append(`
                    <label for="Extras">Hercios (desde los 60 hasta 240)</label>
                    <input type="range" id="hz" name="hz" min="60" max="240">
                `);
            }
        } else {
            console.error("Error: proposito no definido");
        }
    }

    // Evento para actualizar `proposito`
    buttonNext.click(function () {
        proposito = $(this).val();
        nextStep()
        rendimiento(proposito);
    });

    // Inicialización
    (function initialize() {
        hidden(Step);
    })();
});
