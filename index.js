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
