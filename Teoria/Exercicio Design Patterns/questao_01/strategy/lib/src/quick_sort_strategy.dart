import 'sort_strategy.dart';

class QuickSortStrategy implements SortStrategy{
  @override
  List<int> sortList(List<int> numbers) {
    if (numbers.length <= 1) {
        return numbers;
    }

    int pivot = numbers[numbers.length ~/ 2];
    List<int> smaller = [];
    List<int> equal = [];
    List<int> greater = [];

    for (int number in numbers) {
        if (number < pivot) {
        smaller.add(number);
        } else if (number == pivot) {
        equal.add(number);
        } else {
        greater.add(number);
        }
    }

    return [...sortList(smaller), ...equal, ...sortList(greater)];
  }
  
  @override
  String getName() {
    return "Quick Sort";
  }
    

}