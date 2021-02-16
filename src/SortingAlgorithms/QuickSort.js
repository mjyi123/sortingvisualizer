export function getQuickSortAnimations(array) {
    const animations = [];
    if(array.length <= 1) return array;
    quicksortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quicksortHelper(array, startIdx, endIdx, animations) {
    if(startIdx >= endIdx) {
        return;
    }
    const pivotIdx = Math.floor((startIdx + endIdx)/2);
    const pivot = array[pivotIdx];
    const index = partition(array, startIdx, endIdx, pivot, pivotIdx, animations);
    quicksortHelper(array, startIdx, index - 1, animations);
    quicksortHelper(array, index, endIdx, animations);
}

function partition(array, startIdx, endIdx, pivot, pivotIdx, animations) {
    while (startIdx <= endIdx) {
        while(array[startIdx] < pivot) {
            animations.push([startIdx, pivotIdx]);
            animations.push([startIdx, pivotIdx]);
            animations.push([startIdx, array[startIdx], pivotIdx, pivot, 0]);
            startIdx++;
        }
        while(array[endIdx] > pivot) {
            animations.push([endIdx, pivotIdx]);
            animations.push([endIdx, pivotIdx]);
            animations.push([endIdx, array[endIdx], pivotIdx, pivot, 0]);
            endIdx--;
        }
        if(startIdx <= endIdx) {
            animations.push([startIdx, endIdx]);
            animations.push([startIdx, endIdx]);
            animations.push([startIdx, array[startIdx], endIdx, array[endIdx], 1]);
            if(startIdx === pivotIdx) {
                pivotIdx = endIdx;
            }

            if(endIdx === pivotIdx) {
                pivotIdx = startIdx;
            }

            swap(array, startIdx, endIdx);
            startIdx++;
            endIdx--;
        }
    }

    return startIdx;
}

function swap(array, left, right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}