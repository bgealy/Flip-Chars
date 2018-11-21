// Example:
// var input = 'a short example'; 
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'


function flipEveryNChars(input, n) {
    // we are given a string and we are asked to flip the characters at every so length of n
    // first thing we need to do is set a new empty string
    let output = '';
    // next let's iterate through the input -- but stop at every n chars in length
    for (let i = 0; i < input.length; i += n) {
    // next set a variable that will slice out the character pairs -- from 0 to n
        let charPairs = input.slice(i, i + n);
    // next we set a variable that will reverse the character pairs -- split then reverse then join   
        let reversePairs = charPairs.split('').reverse().join('');
        // then we zip these split characters back together by doubling the empty string to the reverse chars -- newStr += reversedPairs
        output += reversePairs;
    }
    // finally return the string and test
    return output;
}


function assertEquals(actual, expected, testName) {
    if (actual === expected) {
        console.log(`PASSED: ${testName} - expected ${expected} and got ${actual}`);
    } else {
        console.log(`FAILED: ${testName} - expected ${expected} but got ${actual}`);
    }
}

let myStr = 'a short example';
let output = flipEveryNChars(myStr, 5);
let expected = 'ohs axe trelpma';
assertEquals(output, expected, 'should flip every 5 characters');


// let myStr = 'a short example';
// let output = bigFlipper(myStr, 5);
// let expected = 'ohs axe trelpma';
// assertEquals(output, expected, 'should reverse every N pairs');
