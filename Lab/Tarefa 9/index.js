const {Carro : CarroClasse} = require('./carro_classe')
const {Carro : CarroFactory} = require('./carro_factory')

const carroObj = new CarroClasse('Esporte', 2020, 'Ferrari')
const carroFac = CarroFactory('Esporte', 2020, 'Ferrari')

console.log("Objeto do tipo Carro com classe")
console.log(carroObj.getMarca(), carroObj.getTipo(), carroObj.getAno(), "Tipo:", typeof(carroObj))
console.log("Objeto do tipo Carro com factory")
console.log(carroFac.getMarca(), carroFac.getTipo(), carroFac.getAno(), "Tipo:", typeof(carroFac))
//console.log(carroFac.getMarca());