package br.inatel;

public class ContaPalavras implements iObservador{

    private int numPalavras;

    @Override
    public void update(String palavra) {
        numPalavras++;
    }

    @Override
    public int getNumPalavras() {
        System.out.println("Numero de Palavras: " + numPalavras);
        return numPalavras;
    }

}
