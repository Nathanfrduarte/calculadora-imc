function CalcularIMC(peso, altura) {
    let imc = peso / (altura * altura)

    let classificacao = ""
    let consequencia = ""

    if (imc < 17) {
        classificacao = "Muito abaixo do peso"
        consequencia = "Queda de cabelo, infertilidade, ausência menstrual"
    } else if (imc >= 17 && imc < 18.5) {
        classificacao = "Abaixo do peso"
        consequencia = "Fadiga, stress, ansiedade"
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso normal"
        consequencia = "Menor risco de doenças cardíacas e vasculares"
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Acima do peso"
        consequencia = "Fadiga, má circulação, varizes";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I"
        consequencia = "Diabetes, angina, infarto, aterosclerose";
    } else if (imc >= 35 && imc <= 40) {
        classificacao = "Obesidade Grau II"
        consequencia = "Apneia do sono, falta de ar"
    } else if (imc > 40) {
        classificacao = "Obesidade Grau III"
        consequencia = "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC"
    }

    return {imc, classificacao, consequencia}
}

export default CalcularIMC;