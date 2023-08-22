import 'sort_strategy.dart';

class MergeSortStrategy implements SortStrategy{
  @override
  List<int> sortList(List<int> numbers) {
    if (numbers.length <= 1) {
      return numbers;
    }

    int mid = numbers.length ~/ 2;
    List<int> left = numbers.sublist(0, mid);
    List<int> right = numbers.sublist(mid);

    return merge(sortList(left), sortList(right));
  }

  List<int> merge(List<int> left, List<int> right) {
    List<int> mergedList = [];
    int leftIndex = 0;
    int rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedList.add(left[leftIndex]);
        leftIndex++;
      } else {
        mergedList.add(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      mergedList.add(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      mergedList.add(right[rightIndex]);
      rightIndex++;
    }

    return mergedList;
  }

  @override
  String getName() {
    return "Merge Sort";
  }

}