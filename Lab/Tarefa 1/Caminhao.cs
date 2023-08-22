using System;

public class Caminhao : Veiculo {
    private int _assentos = 0;
    public int Assentos { get; set; }

    public Caminhao(String placa, int assentos){
        base.Placa = placa;
        Assentos = assentos;
    }

    public override void ExibirDados(){
        base.ExibirDados();
        Console.WriteLine($"Número de assentos: {Assentos}\n");
    }

}