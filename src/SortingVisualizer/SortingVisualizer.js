import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';

import './SortingVisualizer.css';


const ANIMATION_SPEED_MS = 20;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array : []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, height] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, sign] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    // if(sign === 1) {
                    //     console.log([barOneIdx, barTwoIdx])
                    // }
                    barOneStyle.height = sign === 0 ? `${barOneHeight}px` : `${barTwoHeight}px`;
                    barTwoStyle.height = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                    // barOneStyle.height =  `${barOneHeight}px` : `${barTwoHeight}px`;
                    // barTwoStyle.heitgh = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }


    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, sign] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    // if(sign === 1) {
                    //     console.log([barOneIdx, barTwoIdx])
                    // }
                    barOneStyle.height = sign === 0 ? `${barOneHeight}px` : `${barTwoHeight}px`;
                    barTwoStyle.height = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                    // barOneStyle.height =  `${barOneHeight}px` : `${barTwoHeight}px`;
                    // barTwoStyle.heitgh = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight, sign] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    // if(sign === 1) {
                    //     console.log([barOneIdx, barTwoIdx])
                    // }
                    barOneStyle.height = sign === 0 ? `${barOneHeight}px` : `${barTwoHeight}px`;
                    barTwoStyle.height = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                    // barOneStyle.height =  `${barOneHeight}px` : `${barTwoHeight}px`;
                    // barTwoStyle.heitgh = sign === 0 ? `${barTwoHeight}px` : `${barOneHeight}px`;
                },i * ANIMATION_SPEED_MS);
            }
        }
    }

    testSortingAlgorithms_mergeSort() {
        for (let i = 0; i < 1; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const mergeSortedArray = getMergeSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
      }

    testSortingAlgorithms_quickSort() {
        for (let i = 0; i < 1; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const quickSortedArray = getQuickSortAnimations(array.slice());
        //   console.log(javaScriptSortedArray);
        //   console.log(quickSortedArray);
          console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
        }
      }

      testSortingAlgorithms_heapSort() {
        for (let i = 0; i < 1; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const quickSortedArray = getHeapSortAnimations(array.slice());
          console.log(javaScriptSortedArray);
          console.log(quickSortedArray);
        //   console.log(javaScriptSortedArray);
        //   console.log(quickSortedArray);
          console.log(arraysAreEqual(javaScriptSortedArray, quickSortedArray));
        }
      }

      testSortingAlgorithms_bubbleSort() {
        for (let i = 0; i < 1; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const bubbleSortedArray = getBubbleSortAnimations(array.slice());
          console.log(javaScriptSortedArray);
          console.log(bubbleSortedArray);
        //   console.log(javaScriptSortedArray);
        //   console.log(quickSortedArray);
          console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));
        }
      }

    render() {
        const {array} = this.state;

        return (
            <div className = "ui container">
                <div className = "array-container">
                    {array.map((value, idx) => (
                        <div 
                            className = "array-bar"
                            key = {idx}
                            style = {{
                                backgroundColor : PRIMARY_COLOR,
                                height : `${value}px`
                            }}></div>
                    ))}
                    {/* <button className = "ui button" onClick = {() => this.testSortingAlgorithms_mergeSort()}>Test Sorting Algorithms</button> */}
                    {/* <button className = "ui button" onClick = {() => this.testSortingAlgorithms_quickSort()}>Test Quick Sort</button> */}
                    {/* <button className = "ui button" onClick = {() => this.testSortingAlgorithms_heapSort()}>Test Heap Sort</button> */}
                    {/* <button className = "ui button" onClick = {() => this.testSortingAlgorithms_bubbleSort()}>Test Bubble Sort</button> */}
                </div>
                <button className = "ui button primary" onClick = {() => this.resetArray()}>Generate New Array</button>
                <button className = "ui button primary" onClick = {() => this.mergeSort()}>Merge Sort</button>
                <button className = "ui button primary" onClick = {() => this.quickSort()}>Quick Sort</button>
                <button className = "ui button primary" onClick = {() => this.heapSort()}>Heap Sort</button>
                <button className = "ui button primary" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
            </div>
            
        );
    }


}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
if (arrayOne.length !== arrayTwo.length) return false;
for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
    return false;
    }
}
return true;
}
export default SortingVisualizer;
