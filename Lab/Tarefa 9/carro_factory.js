const Carro = (tipo, ano, marca) => ({
    tipo,
    ano,
    marca,
    getTipo: () => tipo,
    getAno: () => ano,
    getMarca: () => marca
})

module.exports = {Carro}