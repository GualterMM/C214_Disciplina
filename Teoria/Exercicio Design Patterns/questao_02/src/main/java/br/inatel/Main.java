package br.inatel;

public class Main {
    public static void main(String[] args) {

        // Criando o observavel (subject)
        FrasesObservavel observavel = new FrasesObservavel();

        //Criando observador
        ContaPalavras observador1 = new ContaPalavras();
        ContaPalavrasMaiusculas observador2 = new ContaPalavrasMaiusculas();
        ContaPalavrasPares observador3 = new ContaPalavrasPares();

        observavel.registraObservador(observador1);
        observavel.registraObservador(observador2);
        observavel.registraObservador(observador3);

        observavel.notificaObservadores("Amanha e meu aniversario");

    }
}