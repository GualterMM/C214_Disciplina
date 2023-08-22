class Carro{
    constructor (tipo, ano, marca){
        this.tipo = tipo
        this.ano = ano
        this.marca = marca
    }

    getTipo(){
        return this.tipo
    }

    getAno(){
        return this.ano
    }

    getMarca(){
        return this.marca
    }
}

module.exports = {Carro}