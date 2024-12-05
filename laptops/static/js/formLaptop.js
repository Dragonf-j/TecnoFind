$(document).ready(function () {


const case_use = $('#id_use_case')
const dynamicDiv = $('#dynamic-laptop-questions'); // Selecciona el contenedor dinámico

    $(case_use).change(function () {
        console.info($(this).val())

        const proposito = $(this).val(); // Obtén el valor seleccionado

        dynamicDiv.empty(); // Limpia el contenido previo del contenedor
        if (proposito !== null || proposito !== ""){
            
            switch(proposito){
                case 'basic':
                    dynamicDiv.append(`
                        <label for="Rendiemiento">1.1- ¿Que potencia necesitas?</label>
                        <select id="rendimiento" name="rendimiento">
                            <option value="bajo">Rendimiento basico (Componentes antiguos o de gama Baja)</option>
                            <option value="Medio">Rendimiento medio (Componentes de gama media)</option>
                            <option value="alto">Rendimiento Alto (Componentes de alto rendimiento)</option>
                            <option value="Top">Top (lo mejor del mercado actualmente)</option>
                        </select>
                    `);
                break;
                case 'Estudios':
                    dynamicDiv.append(`
                        <label for="Rendiemiento">1.1- ¿Que potencia necesitas?</label>
                        <select id="rendimiento" name="rendimiento">
                            <option value="bajo">Rendimiento basico (Componentes antiguos o de gama Baja)</option>
                            <option value="Medio">Rendimiento medio (Componentes de gama media)</option>
                            <option value="alto">Rendimiento Alto (Componentes de alto rendimiento)</option>
                            <option value="Top">Top (lo mejor del mercado actualmente)</option>
                        </select>
                    `);
                break;
                case 'Programacion':
                    dynamicDiv.append(`
                        <label for="Rendiemiento">1.1- ¿Que potencia necesitas?</label>
                        <select id="rendimiento" name="rendimiento">
                            <option value="Medio">Rendimiento medio (Componentes de gama media)</option>
                            <option value="alto">Rendimiento Alto (Componentes de alto rendimiento)</option>
                            <option value="Top">Top (lo mejor del mercado actualmente)</option>
                        </select>
                    `);
                break;
                case 'DiseñoGraph':
                    dynamicDiv.append(`
                        <label for="Rendiemiento">1.1- ¿Que potencia necesitas?</label>
                        <select id="rendimiento" name="rendimiento">
                            <option value="Medio">Rendimiento medio (Componentes de gama media)</option>
                            <option value="alto">Rendimiento Alto (Componentes de alto rendimiento)</option>
                            <option value="Top">Top (lo mejor del mercado actualmente)</option>
                        </select>
                    `);
                break;
                case "gaming":
                    dynamicDiv.append(`
                        <label for="Rendiemiento">1.1- ¿Que potencia necesitas?</label>
                        <select id="rendimiento" name="rendimiento">
                            <option value="Medio">Rendimiento medio (Componentes de gama media)</option>
                            <option value="alto">Rendimiento Alto (Componentes de alto rendimiento)</option>
                            <option value="Top">Top (lo mejor del mercado actualmente)</option>
                        </select>
                    `);
                    if (proposito === "gaming"){
                        dynamicDiv.append(`
                            <label for="Extras">Hercios (desde los 60 hasta 240)</label>
                            <input type="range" id="hz" name="hz" min="60" max="240">
                        `);
                    }
    
                break;
                }
                
        }else{
            console.error("Error")

        }

    });

});
