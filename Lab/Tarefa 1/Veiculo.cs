using System;

public class Veiculo{
    private string _placa = "Desconhecido";
    private int _ano = 0; 
    
    public string Placa { get; set; }
    
    public int GetAno() { return _ano; }
    public void SetAno(int ano) => _ano = ano;

    public void SetAno(string ano){
        if(Int32.TryParse(ano, out int result)){
            _ano = result;
        } 
    }

    public Veiculo(){}

    public Veiculo(string placa, int ano){
        Placa = placa;
        SetAno(ano);
    }

    public virtual void ExibirDados(){
        Console.WriteLine($"Veículo com Placa {Placa} do Ano {this.GetAno()}\n");
    }
}