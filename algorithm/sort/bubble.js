/** 
 * 冒泡排序
 * 平均时间复杂度：O(n2)
 * 空间复杂度度：O(1)
 * 稳定度：稳定
 * 描述：
*/

function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {  // 相邻元素两两对比
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([2,4,7,2,4,7,1,5,3]));



/** 
 * 选择排序
 * 平均时间复杂度：O(n2)
 * 空间复杂度：
 * 描述：
*/

function selectSort(arr) {  // 两重循环
    var len = arr.length;
    var minIndex, temp;
    for (let i = 0; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if(arr[j] < min) {  // 寻找最小的索引值
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// console.log(bubbleSort([2,4,7,2,4,7,1,5,3]));


/** 
 * 插入排序
 * 时间复杂度：
 * 空间复杂度：
 * 描述：
*/

function insertSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (let i = 1; i < len; i++) {
        while(i > 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}

// console.log(bubbleSort([2,4,7,2,4,7,1,5,3]));

/** 
 * 希尔排序
 * 时间复杂度：
 * 空间复杂度：
 * 描述：
*/

function shellSort(arr) {
    var len = arr.length;
        temp, gap = 1;
     while(gap < len / 3) {
         gap = gap*3 + 1;
     }
     for(gap; gap > 0; gap = Math.floor(gap/3)) {
        for(var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
     }
     return arr;
}

/** 
 * 归并排序
 * 时间复杂度
 * 空间复杂度
 * 描述：
*/

function mergeSort() {
    var len  = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    var result = [];
    while( left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
        while(left.length) result.push(right.shift())
        while(right.length) result.push(right.shift())
        return result;
    }
}

/** 
 * 快速排序
 * 时间复杂度
 * 空间复杂度
 * 描述
*/

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

        if(left < right) {
            partitionIndex = partition(arr, left, right);
            quickSort(arr, left, partitionIndex-1);
            quickSort(arr, partitionIndex+1, right);
        }
        return arr;
}

function partition(arr, left, right) {
    var pivot = left,
        index = pivot + 1;
        for (let i = index; i < right; i++) {
            if(arr[i] < arr[pivot]) {
                swap(arr, i, index);
                index++;
            }
        }
        swap(arr, pivot, index - 1);
        return index - 1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}








