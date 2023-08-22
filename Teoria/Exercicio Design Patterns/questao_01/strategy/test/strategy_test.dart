import 'package:test/test.dart';

import '../lib/src/sort_strategy.dart';
import '../lib/src/bubble_sort_strategy.dart';
import '../lib/src/merge_sort_strategy.dart';
import '../lib/src/quick_sort_strategy.dart';

void main(){
  SortStrategy strategy;

  group('Testes de compatibilidade das Strategies', () {
    test('SortStrategy aceita a implementação QuickSortStrategy', () {
      strategy = QuickSortStrategy();

      expect(strategy is QuickSortStrategy, true);
    });

    test('SortStrategy aceita a implementação MergeSortStrategy', () {
      strategy = MergeSortStrategy();

      expect(strategy is MergeSortStrategy, true);
    });

    test('SortStrategy aceita a implementação BubbleSortStrategy', () {
      strategy = BubbleSortStrategy();

      expect(strategy is BubbleSortStrategy, true);
    });

  });

  group('Testes das implementações da Strategy de ordenação', () {
    test('Ordenação com Quick Sort retorna uma lista de inteiros ordenados', () {
      strategy = QuickSortStrategy();
      List<int> list = [0, 4, 7, 2, 3, 8, 55];

      List<int> sortedList = strategy.sortList(list);

      expect(sortedList, equals([0, 2, 3, 4, 7, 8, 55]));
    });

    test('Ordenação com Merge Sort retorna uma lista de inteiros ordenados', () {
      strategy = MergeSortStrategy();
      List<int> list = [0, 4, 7, 2, 3, 8, 55];

      List<int> sortedList = strategy.sortList(list);

      expect(sortedList, equals([0, 2, 3, 4, 7, 8, 55]));
    });

    test('Ordenação com Bubble Sort retorna uma lista de inteiros ordenados', () {
      strategy = BubbleSortStrategy();
      List<int> list = [0, 4, 7, 2, 3, 8, 55];

      List<int> sortedList = strategy.sortList(list);

      expect(sortedList, equals([0, 2, 3, 4, 7, 8, 55]));
    });
    
  });
}
