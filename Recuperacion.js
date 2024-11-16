// Usuarios de ejemplo (simulación de base de datos en memoria)
const usuarios = {
    "admin@arka.com": { password: "admin123", role: "admin" },
    "cliente@arka.com": { password: "cliente123", role: "cliente" }
};

// Función para manejar el inicio de sesión
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar credenciales
    if (usuarios[email]) {
        // Verificar la contraseña con la que está almacenada en localStorage
        const storedPassword = localStorage.getItem(email);
        if (storedPassword === null) {
            // Si no se encuentra una contraseña personalizada en localStorage, usamos la contraseña original.
            if (usuarios[email].password === password) {
                alert("¡Login exitoso!");
                redirigirSegunRol(email);
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        } else {
            if (storedPassword === password) {
                alert("¡Login exitoso!");
                redirigirSegunRol(email);
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        }
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

function redirigirSegunRol(email) {
    const userRole = usuarios[email].role;
    if (userRole === "admin") {
        window.location.href = "Panel-Admin.html"; // Cambia por tu ruta real
    } else if (userRole === "cliente") {
        window.location.href = "Main.html"; // Cambia por tu ruta real
    }
}

// Función para autenticar el correo en recuperación de contraseña
function autenticarCorreo() {
    const email = document.getElementById('email-recuperacion').value;

    // Validar si el correo está registrado
    if (usuarios[email]) {
        mostrarMensaje("Correo verificado. Ahora puedes cambiar tu contraseña.", "success");

        // Mostrar campos para cambiar contraseña
        document.getElementById('cambiar-password').style.display = 'block';
    } else {
        mostrarMensaje("El correo electrónico no está registrado.", "error");
    }
}

// Función para actualizar la contraseña
function actualizarPassword() {
    const nuevaPassword = document.getElementById('nueva-password').value;
    const confirmarPassword = document.getElementById('confirmar-password').value;
    const email = document.getElementById('email-recuperacion').value;

    // Validaciones básicas
    if (!nuevaPassword || !confirmarPassword) {
        mostrarMensaje("Todos los campos son obligatorios.", "error");
        return;
    }

    if (nuevaPassword !== confirmarPassword) {
        mostrarMensaje("Las contraseñas no coinciden.", "error");
        return;
    }

    // Actualizar contraseña en el sistema (en localStorage)
    if (usuarios[email]) {
        // Guardar la nueva contraseña en localStorage
        localStorage.setItem(email, nuevaPassword);
        mostrarMensaje("Contraseña actualizada correctamente.", "success");

        // Opcional: Redirigir al login después de un tiempo
        setTimeout(() => {
            window.location.href = "Login.html"; // Cambia por tu ruta real
        }, 2000);
    } else {
        mostrarMensaje("Error al actualizar la contraseña. Usuario no encontrado.", "error");
    }
}

// Función para mostrar mensajes dinámicos
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo;
    mensajeDiv.style.display = 'block';
}
