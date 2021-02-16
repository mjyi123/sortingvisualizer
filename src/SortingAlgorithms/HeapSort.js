
let animations = [];

export function getHeapSortAnimations(array) {
    reset();
    if(array.length <= 1) return array;
    heapsortHelper(array);
    return animations;
}

function reset() {
    animations = [];
}

function heapsortHelper(array) {
    const size = array.length;
    buildMaxHeap(array, size);
    extraction(array, size);
}

function buildMaxHeap(array, size) {
    for(let i = Math.floor(size / 2 - 1); i >= 0; i--) {
        heapify(array, size, i);
    }
}

function extraction(array, size) {
    for(let i = size - 1; i > 0; i--) {
        swap(array, 0, i);
        buildMaxHeap(array, i);
    }
}

function heapify(array, size, i) {
    let largestIdx = i;
    const leftChildIdx = i * 2 + 1;
    const rightChildIdx = i * 2 + 2;
    if(leftChildIdx < size && array[leftChildIdx] > array[largestIdx]) {
        animations.push([largestIdx, leftChildIdx]);
        animations.push([largestIdx, leftChildIdx]);
        animations.push([largestIdx, array[largestIdx], leftChildIdx, array[leftChildIdx], 0]);
        largestIdx = leftChildIdx;
    }
    if(rightChildIdx < size && array[rightChildIdx] > array[largestIdx]) {
        animations.push([largestIdx, rightChildIdx]);
        animations.push([largestIdx, rightChildIdx]);
        animations.push([largestIdx, array[largestIdx], rightChildIdx, array[rightChildIdx], 0]);
        largestIdx = rightChildIdx;
    }

    if(largestIdx != i) {
        swap(array, i, largestIdx);
        heapify(array, size, largestIdx);
    }
}

function swap(array, left, right) {
    animations.push([left, right]);
    animations.push([left, right]);
    animations.push([left, array[left], right, array[right], 1]);
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

