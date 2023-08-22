import org.junit.Test;

import java.util.EmptyStackException;
import java.util.Stack;

import static org.junit.Assert.*;

public class StackTest {
    @Test (expected = EmptyStackException.class)
    public void testEmptyStackException() {
        Stack<Integer> stack = new Stack<Integer>();

        int r = stack.pop();

    }
}
