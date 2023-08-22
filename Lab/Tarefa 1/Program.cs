class Program{
    static void Main(string[] args){
        Veiculo veiculo1 = new Veiculo();
        Veiculo veiculo2 = new Veiculo("ABCDE123", 2023);

        Caminhao caminhao = new Caminhao("RFEDS496", 2);

        Onibus onibus = new Onibus("OKVNB434", 2010, 6);

        veiculo1.ExibirDados();
        veiculo2.ExibirDados();

        caminhao.ExibirDados();

        onibus.ExibirDados();
    }
}