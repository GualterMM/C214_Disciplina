import gualter.inatel.Fibonacci;
import org.junit.Test;

import static org.junit.Assert.*;

public class FibonacciTeste {

    @Test
    public void testFibonacciResultadoValido(){
        Fibonacci fibonacci = new Fibonacci();

        int resultado = fibonacci.fib(5);
        int esperado = 5;

        assertEquals(esperado, resultado);
    }

    @Test
    public void testFibonacciNumeroZero(){
        Fibonacci fibonacci = new Fibonacci();

        int resultado = fibonacci.fib(0);
        int esperado = 0;

        assertEquals(esperado, resultado);
    }

    @Test
    public void testFibonacciNumeroNegativo(){
        Fibonacci fibonacci = new Fibonacci();

        int resultado = fibonacci.fib(-10);
        int esperado = -1;

        assertEquals(esperado, resultado);
    }
}
