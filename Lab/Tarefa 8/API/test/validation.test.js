const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        marca: "Volks",
        cor: "Azul",
        ano: "2020",
        tipo: "Casual"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - tipo vazio', () => {
    const result = Validation.create({
        marca: "Volks",
        cor: "Azul",
        ano: "2020",
        tipo: ""
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro cor', () => {
    const result = Validation.create({
        marca: "Volks",
        ano: "2020",
        tipo: "Esporte"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
