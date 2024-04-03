//1.1
function computeAreaOfRectangle(length, width){
    return length * width;
}

var output = computeAreaOfRectangle(4, 8);
console.log(output);

//1.2
function computeAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

var output = computeAreaOfCircle(4);
console.log(output);

//1.3
function computePower(base, exponent) {
    return Math.pow(base, exponent);
}

var output = computePower(2, 3);
console.log(output);

//1.4
function computeSquareRoot(number) {
    return Math.sqrt(number);
}

var output = computeSquareRoot(9);
console.log(output);

//1.5
function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);

//1.6
function joinArrays(array1, array2) {
    return array1.concat(array2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output);

//1.7
function getProductOfAllElementsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {
        return 0;
    }

    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }

    var product = 1;
    for (var i = 0; i < obj[key].length; i++) {
        product *= obj[key][i];
    }

    return product;
}

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output);

//1.8
function sumDigits(number) {
    var numberStr = Math.abs(number).toString();

    var sum = 0;
    for (var i = 0; i < numberStr.length; i++) {
        sum += parseInt(numberStr[i]);
    }

    if (number < 0) {
        sum *= -1;
    }

    return sum;
}

var output = sumDigits(1148);
console.log(output);

var output2 = sumDigits(-316);
console.log(output2);

//1.9
function findShortestWordAmongMixedElements(arr) {
    var shortestWord = '';

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            if (shortestWord === '' || arr[i].length < shortestWord.length) {
                shortestWord = arr[i];
            }
        }
    }

    return shortestWord;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, "three"]); 
console.log(output);
