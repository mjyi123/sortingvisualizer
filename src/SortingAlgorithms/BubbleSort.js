let animations = [];

export function getBubbleSortAnimations(array) {
    reset();
    const len = array.length;
    for(let i = len - 1; i >= 1 ; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if(array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }

    return animations;
}

function reset() {
    animations = [];
}


function swap(array, left, right) {
    animations.push([left, right]);
    animations.push([left, right]);
    animations.push([left, array[left], right, array[right], 1]);
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}