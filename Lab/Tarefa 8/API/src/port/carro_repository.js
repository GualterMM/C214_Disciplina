const { CarroModel } = require('../infrastructure/database');

const CarroRepository = {
    async create(data) {
        try {
            const model = new CarroModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                marca: data.marca,
                ano: data.ano,
                cor: data.cor,
                tipo: data.tipo
            };
            const options = { new: true };
            const filter = { id: data.id };
            const result = await CarroModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await CarroModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

    async getByTipo(data) {
        try {
            const result = await CarroModel.findOne({ tipo: data.tipo }).exec();
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarroModel.deleteOne({ email: data.email }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarroRepository;