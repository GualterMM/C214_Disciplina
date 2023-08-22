import 'sort_strategy.dart';

class BubbleSortStrategy implements SortStrategy{
  @override
  List<int> sortList(List<int> numbers) {
    int length = numbers.length;

    for (int i = 0; i < length - 1; i++) {
      bool swapped = false;

      for (int j = 0; j < length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
          int temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return numbers;
  }

  @override
  String getName() {
    return "Bubble Sort";
  }

}