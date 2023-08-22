package br.inatel;

import java.util.ArrayList;
import java.util.List;

public class FrasesObservavel {

    private List<iObservador> observadores;

    public FrasesObservavel() {
        observadores = new ArrayList<iObservador>();
    }

    public void notificaObservadores(String frase) {

        String[] palavras = frase.split(" ");
        for (String palavra : palavras) {
            for (iObservador observador : observadores) {
                observador.update(palavra);
            }
        }
        for (iObservador observador : observadores) {
            observador.getNumPalavras();
        }

    }

    public void registraObservador(iObservador obs) {
        observadores.add(obs);
    }

    public void removeObservador(iObservador obs) {
        observadores.remove(obs);

    }

    public List<iObservador> getObservadores() {
        return observadores;
    }

}