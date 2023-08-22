package br.inatel;

public class ContaPalavrasPares implements iObservador {

    private int numPalavras;

    @Override
    public void update(String palavra) {
        if((palavra.length())%2 == 0)
            numPalavras++;
    }

    @Override
    public int getNumPalavras() {
        System.out.println("Numero de Palavras Pares: " + numPalavras);
        return numPalavras;
    }

}

