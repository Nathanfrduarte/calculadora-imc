import IMC from '/javascript/imc.js'
import IMCHistory from '/javascript/imcHistory.js'

const form = document.forms['formIMC']

form.addEventListener('submit', (event) => {
    // Prevent the action by default in forms
    event.preventDefault()
    
    // Return case peso or altura is empty
    if (!form.peso.value || !form.altura.value) return

    // Convert do to float and format like a float number
    const peso = parseFloat(form.peso.value.replace(",", "."))
    const altura = parseFloat(form.altura.value.replace(",", "."))

    // Function to calculate de IMC
    const imc = new IMC(peso, altura)
    imc.calcular(peso, altura)

    // Function to show the result
    showResult(imc)

    // Save the values in the LocalStorage
    const history = new IMCHistory()
    history.addImc(imc)
})

const showResult = (imc) => {
    // Get the div
    const divResult = document.getElementById('result')
    
    // Change CSS
    if (divResult.classList.contains('visible')) {
        divResult.classList.remove('visible')
    }

    // Add values in HTML by Template String
    divResult.innerHTML = `
        <h3>${imc.imc.toFixed(2)} Kg/m²</h3>
        <h2>${imc.classificacao}</h2>
        <p><strong>O que pode acontecer:</strong></p>
        <p>${imc.consequencia}</p>
    `

    // Timeout to show the history
    setTimeout(() => divResult.classList.add('visible'), 200)
}

// Action Listener buttom click to show the history
const onClickHistory = document.getElementById('btn-history')
onClickHistory.addEventListener('click', () => {
    const history = new IMCHistory()
    showHistory(history)
})

// Show the history
const showHistory = (history) => {

    const divHistoty = document.getElementById('history')
    
    if (divHistoty.classList.contains('visible')) {
        divHistoty.classList.remove('visible')
    }

    // Order history by descending order
    const orderedHistory = history.history.sort((a, b) => b._data - a._data)
    
    divHistoty.innerHTML = orderedHistory.reduce((template, hist) => {
        const data = new Date(hist._data)

        return template + `
        <div class="imc-history">
            <p>${data.toLocaleDateString()}</p>
            <h3>${hist._imc.toFixed(2)} kg/m²</h3>
            <h2>${hist._classificacao}</h2>
        </div>
        `
    }, '')

    setTimeout(() => divHistoty.classList.add('visible'), 200)
}
