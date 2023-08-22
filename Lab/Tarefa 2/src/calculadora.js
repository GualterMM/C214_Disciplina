const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num1, num2) {
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'O primeiro argumento deve ser um número.';
        } else if(validateNum2 !== undefined){
            return 'O segundo argumento deve ser um número.';
        }

        return num1 + num2;
    },

    subtracao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'O primeiro argumento deve ser um número.';
        } else if(validateNum2 !== undefined){
            return 'O segundo argumento deve ser um número.';
        }

        return num1 - num2;
    },

    multiplicacao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'O primeiro argumento deve ser um número.';
        } else if(validateNum2 !== undefined){
            return 'O segundo argumento deve ser um número.';
        }

        return num1 * num2;
    },

    divisao(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'O primeiro argumento deve ser um número.';
        } else if(validateNum2 !== undefined){
            return 'O segundo argumento deve ser um número.';
        } else if(num2 == 0){ // Não consegui incluir uma regra que checava por Not Equal To no validator
            return 'O segundo argumento deve ser diferente de zero.'
        }

        return num1 / num2;
    },

    potencia(num1, num2){
        const validateNum1 = validate({ num1 }, CalculadoraConstraint.calculadoraConstraint);
        const validateNum2 = validate({ num2 }, CalculadoraConstraint.calculadoraConstraint);

        if(validateNum1 !== undefined){
            return 'O primeiro argumento deve ser um número.';
        } else if(validateNum2 !== undefined){
            return 'O segundo argumento deve ser um número.';
        }

        return num1 ** num2;
    }
    
};

module.exports = Calculadora;