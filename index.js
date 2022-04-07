const button = document.querySelector("#print")
const input = document.querySelector("#email-input")

button.addEventListener("click", event => {
    const output = document.querySelector("#email-output")
    output.textContent = input.value
})
