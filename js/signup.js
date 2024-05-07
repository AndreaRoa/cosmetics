// Selecciona el formulario de registro por su ID
const signupForm = document.querySelector('#signupForm')

// Agrega un evento de escucha para el envío del formulario
signupForm.addEventListener('submit', (e) => {
    e.preventDefault() // Evita que la página se recargue al enviar el formulario

    // Obtiene los valores del formulario de registro
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    // Obtiene la lista de usuarios del almacenamiento local o inicializa un arreglo vacío si no hay usuarios
    const Users = JSON.parse(localStorage.getItem('users')) || []

    // Verifica si el usuario ya está registrado
    const isUserRegistered = Users.find(user => user.email === email)

    // Si el usuario ya está registrado, muestra una alerta y detiene la ejecución
    if (isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario ya está registrado!'
        })
        return
    }

    // Agrega un nuevo usuario al arreglo de usuarios
    Users.push({ name, email, password })

    // Almacena la lista de usuarios actualizada en el almacenamiento local
    localStorage.setItem('users', JSON.stringify(Users))

    // Muestra una alerta de registro exitoso con SweetAlert2
    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: 'Tu registro se ha realizado con éxito.'
        /*Después de que se resuelve la promesa, el código dentro de la función de then() se ejecuta. En este caso, después de que la promesa se resuelva correctamente, se ejecuta una función de flecha (la función vacía () => {}) que redirige al usuario a la página de inicio de sesión (login.html) cambiando la URL actual del navegador mediante window.location.href.*/
    }).then(() => {
        // Redirige al usuario a la página de inicio de sesión después de cerrar la alerta
        window.location.href = 'login.html' 
    })
})