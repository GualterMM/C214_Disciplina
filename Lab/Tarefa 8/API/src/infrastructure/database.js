const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.gyfho7z.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    marca: String,
    cor: String,
    ano: String,
    tipo: String,
});

const CarroModel = mongoose.model('CarroModel', CarroSchema);

module.exports = {
    CarroModel,
};