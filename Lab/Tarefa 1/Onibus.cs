using System;

public class Onibus : Veiculo{
    private int _eixos = 0;
    public int Eixos { get; set; }

    public Onibus(String placa, int ano, int eixos){
        base.Placa = placa;
        base.SetAno(ano);
        Eixos = eixos;
    }

    public override void ExibirDados(){
        base.ExibirDados();
        Console.WriteLine($"Número de eixos: {Eixos}\n");
    }

}