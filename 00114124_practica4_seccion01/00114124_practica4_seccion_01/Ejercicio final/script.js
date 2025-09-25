// Función simple que recibe día y mensaje personalizado
function obtenerActividadDelDia(dia, mensaje = '') {
    const actividades = {
        'lunes': {
            actividad: 'Atender un cliente específico',

        },
        'martes': {
            actividad: 'Visitar una agencia fuera de la ciudad',

        },
        'miércoles': {
            actividad: 'Llevar a mi hija al ballet',

        },
        'jueves': {
            actividad: 'Priorizar entregas de desarrollo',

        },
        'viernes': {
            actividad: 'Atender problemas remotamente',

        },
        'sábado': {
            actividad: 'Hacer lo que mi esposa quiera',

        },
        'domingo': {
            actividad: 'Día libre para descansar',

        }
    };

    return actividades[dia.toLowerCase()] || null;
}

// Función simple para mostrar la actividad
function mostrarActividad(diaInfo, mensaje = '') {
    const resultado = document.getElementById('resultadoActividad');

    if (diaInfo) {
        resultado.innerHTML = `


                <div class="actividad-titulo">
                    ${diaInfo.actividad}
                </div>
                ${mensaje ? `<div class="actividad-descripcion">Nota: ${mensaje}</div>` : ''}

            </div>
        `;
    } else {
        resultado.innerHTML = '<p class="placeholder">Selecciona un día para ver tu actividad programada</p>';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const selectDia = document.getElementById('diaSemana');

    selectDia.addEventListener('change', function () {
        if (this.value) {
            const actividadInfo = obtenerActividadDelDia(this.value);
            mostrarActividad(actividadInfo);
        } else {
            mostrarActividad(null);
        }
    });
});