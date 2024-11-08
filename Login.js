function login() {
    // Obtén los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Definimos los usuarios y roles
    const users = {
        "Administrador": { password: "admin123", role: "admin" },
        "Cliente": { password: "cliente123", role: "cliente" }
    };

    // Verifica el usuario y la contraseña
    if (users[username] && users[username].password === password) {
        alert("¡Login exitoso!");

        // Obtenemos el rol del usuario autenticado
        const userRole = users[username].role;

        // Redirigimos según el rol
        if (userRole === "admin") {
            // Redirige o muestra la vista del administrador (datatable)
            window.location.href = "Panel-Admin.html"; // Reemplaza con la URL real
        } else if (userRole === "cliente") {
            // Redirige o muestra la vista principal del cliente
            window.location.href = "Main.html"; // Reemplaza con la URL real
        }
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
