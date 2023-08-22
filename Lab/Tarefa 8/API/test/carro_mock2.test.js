const { CarroModel } = require('../src/infrastructure/database');
const carro = require('../src/port/carro_repository');

describe('create', () => {
    it('Valid Carro', async () => {
        CarroModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                marca: "Volks",
                ano: "2020",
                cor: "Preto",
                tipo: "Casual"
            }),
        }));

        expect(await carro.create({
            id: 1,
            marca: "Volks",
            ano: "2020",
            cor: "Preto",
            tipo: "Casual"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                ano: expect.any(String),
                cor: expect.any(String),
                tipo: expect.any(String)
            }),
        );
    });
});

describe('editCarro', () => {
    it('Valid Edit', async () => {
        CarroModel.findOneAndUpdate = jest.fn().mockImplementation(() => ({
            exec: () => ({
                toObject: () => ({
                    id: 1,
                    marca: "Volks",
                    ano: "2020",
                    cor: "Preto",
                    tipo: "Casual"
                }),
            }),
        }));

        expect(await carro.update({
            marca: "Chevrolet",
            ano: "2022",
            cor: "Azul",
            tipo: "Casual"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                ano: expect.any(String),
                cor: expect.any(String),
                tipo: expect.any(String)
            }),
        );
    });
});

describe('listCarros', () => {
    it('Valid list', async () => {
        CarroModel.find = jest.fn().mockImplementation(() => ({
            exec: () => ({
                id: 1,
                marca: "Volks",
                ano: "2020",
                cor: "Preto",
                tipo: "Casual"
            }),
        }));

        expect(await carro.list()).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: "Volks",
                ano: "2020",
                cor: "Preto",
                tipo: "Casual"
            }),
        );

    });
});

describe('deleteCarro', () => {
    it('Valid delete', async () => {
        CarroModel.deleteOne = jest.fn().mockImplementation(() => ({
            exec: () => ({
                deletedCount: 1,
            }),
        }));

        expect(await carro.delete({
            id: 1,
        })).toEqual(1);
    });
});