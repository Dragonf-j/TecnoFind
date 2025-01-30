$(document).ready(function () {

    // Declaración de constantes
    const case_use = $('#id_use_case');
    const dynamicDiv = $('#dynamic-laptop-questions'); 
    const buttonPrev = $('#previusStep');
    const buttonNext = $('#nextStep');
    const buttonSend = $('#send');
    const firstDiv = $('#firtdiv'); // Añadir esta línea para seleccionar el div firtdiv

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
        hidden(Step); // Actualiza la visibilidad de los botones
        if (Step > 0) {
            firstDiv.css('display', 'none'); // Oculta el div firtdiv cuando se avanza a la pregunta 2
        }
    }

    // Función que nos lleva a la pregunta anterior en el formulario
    function previusStep() {
        if (Step > 0) {
            Step -= 1;
            allStep.pop();
            allvalues.pop();
            dynamicDiv.empty(); // Limpia las preguntas dinámicas
            if (Step === 0) {
                case_use.css('display', 'block'); // Muestra el propósito principal
                firstDiv.css('display', 'block'); // Muestra el div firtdiv cuando se regresa a la pregunta 1
            } else {
                rendimiento(allvalues[Step - 1]); // Muestra la pregunta anterior
            }
            hidden(Step); // Actualiza la visibilidad de los botones
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
    function portatibilidad(){
        const opciones = `
            <label for="Portabilidad">2- ¿Qué tamaño de pantalla prefieres?</label>
            <select id="portabilidad" name="portabilidad">
                <option value="13">13"</option>
                <option value="15">15"</option>
                <option value="17">17"</option>
            </select>
        `;
    }

    function presupuesto(){
        const opciones = `
            <label for="Presupuesto">3- ¿Cuál es tu presupuesto?</label>
            <select id="presupuesto" name="presupuesto">
                <option value="bajo">Bajo (Menos de 500€)</option>
                <option value="medio">Entre 500 y 1000</option>
                <option value="alto">Entre 1000 y 1500</option>
                <option value="Muy alto">Mas de 2000</option>
            </select>
        `;
    }

    function almacenamiento(){
        const opciones = `
            <label for="Almacenamiento">4- ¿Qué capacidad de almacenamiento necesitas?</label>
            <select id="almacenamiento" name="almacenamiento">
                <option value="bajo">256 GB</option>
                <option value="medio">512 GB</option>
                <option value="alto">1 TB</option>
                <option value="Muy alto">2 TB</option>
            </select>
        `;
    }

    function velocidadAlmacenamiento(){
        const opciones = `<label for="Velocidad">4.1 - ¿Qué velocidad de almacenamiento quieres?</label>
        <select id="velocdad" name="velocidad">
            <option value="tortuga">Hdd (Lento pero con alta capacidad de almacenamiento)</option>
            <option value="Hibidro">Mezcla entre HDD y SSD (Combina lo mejor de ambos mundos)</option>
            <option value="Rapido">SSD (Muy rapido)</option>
            <option value="NoImporta">No tiene importancia</option>
        </select>
    `;
    }

    function bateria(){
        const opciones = `<label for="Velocidad">4.1 - ¿Qué velocidad de almacenamiento quieres?</label>
            <select id="velocdad" name="velocidad">
                <option value="tortuga">Hdd (Lento pero con alta capacidad de almacenamiento)</option>
                <option value="Hibidro">Mezcla entre HDD y SSD (Combina lo mejor de ambos mundos)</option>
                <option value="Rapido">SSD (Muy rapido)</option>
                <option value="NoImporta">No tiene importancia</option>
            </select>
        `;
    }

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
        proposito = case_use.val();
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
