const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    tipo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    cor: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    tipo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    tipo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    id: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};