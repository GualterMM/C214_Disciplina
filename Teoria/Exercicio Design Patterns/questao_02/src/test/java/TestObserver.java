import br.inatel.ContaPalavras;
import br.inatel.ContaPalavrasMaiusculas;
import br.inatel.ContaPalavrasPares;
import br.inatel.FrasesObservavel;
import org.junit.Test;
import static org.junit.Assert.*;

public class TestObserver {
    private String frase = "Frase para teste usando JUnit";
	
	@Test
	public void testContaPalavras() {
		
        FrasesObservavel observavel = new FrasesObservavel();
        observavel.registraObservador(new ContaPalavras());
        observavel.notificaObservadores(frase);
        assertEquals(5, observavel.getObservadores().get(0).getNumPalavras());

	}

    @Test
    public void testContaPalavrasPares() {

        FrasesObservavel observavel = new FrasesObservavel();
        observavel.registraObservador(new ContaPalavrasPares());
        observavel.notificaObservadores(frase);
        assertEquals(2, observavel.getObservadores().get(0).getNumPalavras());

    }

    @Test
    public void testContaPalavrasMaiusculas() {

        FrasesObservavel observavel = new FrasesObservavel();
        observavel.registraObservador(new ContaPalavrasMaiusculas());
        observavel.notificaObservadores(frase);
        assertEquals(2, observavel.getObservadores().get(0).getNumPalavras());

    }

    @Test
    public void testeObservadoresVazio(){
        FrasesObservavel observavel = new FrasesObservavel();
        assertTrue(observavel.getObservadores().isEmpty());
    }

    @Test
    public void teste2Observadores(){
        FrasesObservavel observavel = new FrasesObservavel();
        observavel.registraObservador(new ContaPalavras());
        observavel.registraObservador(new ContaPalavrasPares());
        assertEquals(observavel.getObservadores().size(), 2);
    }
	
}
