export function getMergeSortAnimations(array) {
    // console.log(array);
    const animations = [];
    if(array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    // console.log(auxiliaryArray);
    mergeSortHelper(array, 0, array.length -1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray, animations);
    merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let main_left = startIdx;
    let main_right = middleIdx + 1;
    let aux_left = startIdx;
    while(main_left <= middleIdx && main_right <= endIdx) {
        animations.push([main_left, main_right]);
        animations.push([main_left, main_right]);
        if(auxiliaryArray[main_left] <= auxiliaryArray[main_right]) {
            animations.push([aux_left, auxiliaryArray[main_left]]);
            mainArray[aux_left++] = auxiliaryArray[main_left++];
        } else {
            animations.push([aux_left,auxiliaryArray[main_right]]);
            mainArray[aux_left++] = auxiliaryArray[main_right++];
        }
    }

    while(main_left <= middleIdx) {
        animations.push([main_left, main_left]);
        animations.push([main_left, main_left]);
        animations.push([aux_left, auxiliaryArray[main_left]]);
        mainArray[aux_left++] = auxiliaryArray[main_left++];
    }

    while(main_right <= endIdx) {
        animations.push([main_right, main_right]);
        animations.push([main_right, main_right]);
        animations.push([aux_left, auxiliaryArray[main_right]]);
        mainArray[aux_left++] = auxiliaryArray[main_right++];
    }
}