package br.inatel;

public interface iObservavel {

    public void registraObservador(iObservador obs);
    public void removeObservador(iObservador obs);
    public void notificaObservadores();

}
