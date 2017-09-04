const readline = require('readline');

const initializeReader = function initializeReader() {
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return reader;
};

const reader = initializeReader();

const askIfGreaterThan = function askIfGreaterThan(el1, el2, callback) {
  reader.question(
    `Is ${el1} greater than ${el2}? `,
    (answer) => {
      if (answer[0] === 'y') {
        callback(true);
      } else if (answer[0] === 'n') {
        callback(false);
      } else {
        console.log('Invalid answer!');
        askIfGreaterThan(el1, el2, callback);
      }
    });
};

const logResult = function logResult(isGreater) {
  if (isGreater) {
    console.log('it is!');
  } else {
    console.log("it's not!");
  }
};

const innerBubbleSortLoop =
  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
        if (isGreaterThan) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          madeAnySwaps = true;
        }

        innerBubbleSortLoop(
          arr, i + 1, madeAnySwaps, outerBubbleSortLoop
        );
      });
    } else {
      outerBubbleSortLoop(madeAnySwaps);
    }
};

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], (arr) => {
  console.log(`Sorted array: ${JSON.stringify(arr)}`);
  reader.close();
});
