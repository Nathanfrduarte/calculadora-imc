class IMCHistory{

    get history() {
        return this._history
    }

    constructor() {

        // Lista do histórico
        this._history = []

        // Buscar no localStorage o histórico
        const historyJson = localStorage.getItem('imc-history')

        // Se não existir histórico, encerra o construtor
        if (historyJson === null) return

        // Parse do JSON para o history
        this._history = JSON.parse(historyJson)
    }

    addImc(imc) {
        // Adiciona novo objeto na lista
        this._history.push(imc)

        // Transforma o history em JSON
        const historyJson = JSON.stringify(this._history)

        // Escreve no localStorage
        localStorage.setItem('imc-history', historyJson)
    }
}

export default IMCHistory