// Función para redirigir a diferentes vistas
function navigate(destino) {
    if (destino === 'configuracion') {
        window.location.href = 'Editor.html'; // Cambia la ruta a la vista de configuración
    } else if (destino === 'tabla') {
        window.location.href = 'Datatable-Admin.html'; // Cambia la ruta a la vista de la tabla de datos
    }
}
