const Carro = require('../src/application/carro_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const CarroRepository = require('../src/port/carro_repository');

jest.mock('../src/port/carro_repository');

it('CREATE - Dado válido', async () => {
    const data = {
        marca: "Volks",
        ano: "2020",
        cor: "Preto",
        tipo: "Casual"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ ...data, id });

    const result = await Carro.create(data);
    expect(result).toEqual({ ...data, id });
})

it('CREATE - Dado duplicado', async () => {
    const data = {
        marca: "Volks",
        ano: "2020",
        cor: "Preto",
        tipo: "Casual"
    }

    const id = Utils.generateUuid();

    CarroRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Carro.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
