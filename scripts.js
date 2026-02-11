// Elementos HTML
const input_1 = document.getElementById("num1");
const input_2 = document.getElementById("num2");
const divOperation = document.getElementById("operation");
const res = document.getElementById("response");
// Eventos para ver si el valor de los inputs cambia y así activar los botones
input_1.addEventListener("input", (e) => {
    const value = e.target.value;
    // Verificamos que haya un valor en ambos inputs.
    if (value && input_2.value) disabledButtons(false);
    else disabledButtons(true);

});

input_2.addEventListener("input", (e) => {
    const value = e.target.value;
    // Verificamos que haya un valor en ambos inputs.
    if (value && input_1.value) disabledButtons(false);
    else disabledButtons(true);
});

// Función para las diferentes operaciones
function operations(opp) {
    // Convertimos los strings provenientes de los inputs a números
    const num1 = parseFloat(input_1.value);
    const num2 = parseFloat(input_2.value);
    // Operación final y resultado
    let operation;
    let result;

    // Verficiamos si los valores del input son válidos como números
    if (isNaN(num1) || isNaN(num2)) return alert("Valor invalido, ingrese un número valido.");

    switch (opp) {
        case "+":
            result = num1 + num2;
            operation = `La operación fue: ${num1} + ${num2} = ${result}`
            break;
        case "-":
            result = num1 - num2;
            operation = `La operación fue: ${num1} - ${num2} = ${result}`
            break;
        case "*":
            result = num1 * num2;
            operation = `La operación fue: ${num1} * ${num2} = ${result}`
            break;
        case "/":
            if (num2 === 0) return alert("No se puede dividir entre 0.");
            result = num1 / num2;
            operation = `La operación fue: ${num1} / ${num2} = ${result}`
            break;
        case "%":
            if (num2 === 0) return alert("No se puede realizar el residuo con divisor 0.");
            operation = `La operación fue: ${num1} % ${num2} = ${result}`
            result = num1 % num2;
            break;
        default:
            alert("Opción invalida.")
            break;
    }

    // Se escribe el resultado en el input de la respuesta
    res.value = Intl.NumberFormat().format(result);
    // Vaciamos los inputs de los números
    input_1.value = "";
    input_2.value = "";
    // Colocamos la operación en el div
    divOperation.innerHTML = operation;
    // Desactivamos los botones
    disabledButtons(true);
    // Ponemos el foco en el primer input
    input_1.focus();
}

// Función para desactivar o activar los botones
const disabledButtons = (disabled) => {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.disabled = disabled);
}