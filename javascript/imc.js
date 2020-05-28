import CalcularIMC from '../javascript/calcularIMC.js'

class IMC {

    //Como não queremos que as properties sejam manipuladas externamente
    //Fornecemos GETTERS somente leitura para nossas variáveis
    get peso() {
        return this._peso
    }

    get altura() {
        return this._altura
    }

    get imc() {
        return this._imc
    }

    get classificacao() {
        return this._classificacao
    }

    get consequencia() {
        return this._consequencia
    }

    get data() {
        return this._data
    }

    constructor(peso, altura) {
        this._peso = peso
        this._altura = altura
        this._data = new Date().getTime() // Date and Time to be possible to order by
    }

    calcular() {
        //Chamada pra função CalcularIMC
        const { imc, classificacao, consequencia } = CalcularIMC(
            this.peso,
            this.altura
        );
        
        //Atribuímos valores as propriedade. do objeto
        this._imc = imc;
        this._classificacao = classificacao
        this._consequencia = consequencia
    }
}

export default IMC