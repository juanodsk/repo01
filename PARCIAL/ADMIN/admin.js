function validarEmail() {
    const emailInput = document.getElementById("email");
    const resultElement = document.getElementById("result");
    const email = emailInput.value;

    // Expresión regular para validar un correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
        resultElement.textContent = "Email válido";
    } else {
        resultElement.textContent = "Email inválido";
    }
}