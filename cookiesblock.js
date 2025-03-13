// Lista blanca de IDs permitidos
        //const whitelist = [375, 994]; // Ejemplo de lista blanca

        // Función para generar un ID aleatorio entre 0 y 1000
        function generarIdUnico() {
            return Math.floor(Math.random() * 1001); // Genera un número aleatorio entre 0 y 1000
        }

        // Función para crear o verificar la cookie con el ID
        function verificarYCrearId() {
            let idUsuario = Cookies.get('user_id'); // Usamos js-cookie para obtener la cookie

            // Comprobamos si la cookie existe
            if (idUsuario) {
                console.log("Cookie 'user_id' encontrada:", idUsuario);
            } else {
                console.log("No se encontró cookie, generando un nuevo ID.");
                // Si no existe la cookie, generamos un nuevo ID y lo almacenamos
                idUsuario = generarIdUnico();
                Cookies.set('user_id', idUsuario, { expires: 7, path: '/' }); // Guardamos el ID en la cookie (expira en 7 días)
                console.log("Nuevo ID generado y guardado en cookie:", idUsuario);
                console.log("by b1s4")
            }

            // Aseguramos que el valor de idUsuario es un número
            idUsuario = parseInt(idUsuario);

            // Mostramos el ID en el elemento con id "user-id"
            document.getElementById('user-id').textContent = "ID: " + idUsuario;

            // Verificar si el ID está en la whitelist
            if (!whitelist.includes(idUsuario)) {
                console.log("ID no permitido, redirigiendo a blocked.html");
                window.location.href = "fakeblock.html"; // Redirige a la página de acceso denegado
                console.log("by b1s4")
            }
        }

        // Llama a la función para verificar y mostrar el ID al cargar la página
        window.onload = function() {
            // Verificamos si las cookies están habilitadas
            if (navigator.cookieEnabled) {
                console.log("Cookies habilitadas");
                verificarYCrearId(); // Ejecutar el proceso de verificación y creación de ID
            } else {
                console.log("Las cookies están deshabilitadas. Por favor, habilítelas para un funcionamiento correcto.");
            }
        };
