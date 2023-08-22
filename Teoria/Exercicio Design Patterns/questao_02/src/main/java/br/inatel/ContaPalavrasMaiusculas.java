package br.inatel;

public class ContaPalavrasMaiusculas implements iObservador {

    private int numPalavras;

    @Override
    public void update(String palavra) {
        if(Character.isUpperCase(palavra.charAt(0)))
            numPalavras++;
    }

    @Override
    public int getNumPalavras() {
        System.out.println("Numero de Palavras Maiusculas: " + numPalavras);
        return numPalavras;
    }

}

