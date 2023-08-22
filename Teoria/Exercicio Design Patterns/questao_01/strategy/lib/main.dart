import 'dart:convert';
import 'dart:io';

import 'src/sort_strategy.dart';
import 'src/bubble_sort_strategy.dart';
import 'src/merge_sort_strategy.dart';
import 'src/quick_sort_strategy.dart';

void main(){
  late SortStrategy strategy;
  List<int> list = [];

  bool listInserted = false;
  bool validOption = false;
  

  print("============================== ENTRADA DE DADOS ==============================");
  print("Entre com a sua lista a ser ordenada. Ela deve ser gerada por números inteiros separados de espaço, como no exemplo abaixo: ");
  print("1 4 2 5");
  print("Lista: ");

  while(!listInserted){
    String? input = stdin.readLineSync(encoding: utf8);

    try{
      List<dynamic> dynamicList = input!.split(RegExp(r'[^0-9]'));
      list = dynamicList.map((e) {
        try{
          return int.parse(e);
        } on FormatException{
          throw "A lista inserida contém caracteres não númericos!";
        }
      }).toList();
      listInserted = true;
    } catch(e){
      print(e.toString());
      print("Entre com sua lista de inteiros novamente.");
      listInserted = false;
    }
  }

  print("Lista inserida: " + list.toString());

  print("============================ ALGORITMO DE ORDENAÇÃO ============================");

  while(!validOption){
    print("Escolha o algoritmo de ordenação: ");
    print("1 - Algoritmo Quick Sort");
    print("2 - Algoritmo Merge Sort");
    print("3 - Algoritmo Bubble Sort");

    String? input = stdin.readLineSync(encoding: utf8);
    late int choice;

    try{
      try{
        choice = int.parse(input!);
        validOption = true;
      } on FormatException{
        validOption = false;
        throw "A entrada não condiz com as opções listadas!"; 
      }

      switch(choice){
        case 1:
        strategy = QuickSortStrategy();
        break;

        case 2:
        strategy = MergeSortStrategy();
        break;

        case 3:
        strategy = BubbleSortStrategy();
        break;

        default:
        validOption = false;
        throw "A entrada não condiz com as opções listadas!"; 
      }
    } catch(e){
      print(e.toString());
    }
  }

  print("Algoritmo selecionado: " + strategy.getName());

  print("============================ RESULTADO ============================");
  print("Lista não ordenada: " + list.toString());
  print("Lista ordenada: " + strategy.sortList(list).toString());
  
  
}
