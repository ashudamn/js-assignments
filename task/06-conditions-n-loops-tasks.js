'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    let result;
    if (num % 3 == 0 && num % 5 == 0) {
        result = "FizzBuzz";
    } else if (num % 3 == 0) {
        result = "Fizz";
    } else if (num % 5 == 0) {
        result = "Buzz";
    } else {
        result = num;
    }
    return result;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    let result = 1;
    if (n == 0 || n == 1) result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum = sum + i;
    }
    return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
    let isValid = false;
    if (a + b > c && b + c > a && a + c > b) {
        isValid = true;
    }
    return isValid;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    let downRect1 = rect1.top + rect1.height,
        rightRect1 = rect1.left + rect1.width,
        result;
    if (downRect1 >= rect2.top && rightRect1 >= rect2.left) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * 
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    let distanceFromCenter = Math.sqrt(Math.pow(circle.center.x - point.x, 2) + Math.pow(circle.center.y - point.y, 2));
    return circle.radius > distanceFromCenter;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let charMap = new Map(),
        c, val, found;
    for (let i = 0; i < str.length; i++) {
        c = str.charAt(i);
        if (charMap.has(c)) {
            val = charMap.get(c);
            charMap.delete(c);
            charMap.set(c, val + 1);
        } else {
            charMap.set(c, 1);
        }
    }
    found = null;
    for (var pair of charMap) {
        if (charMap.get(pair[0]) === 1) {
            found = pair[0];
            break;
        }
    }
    return found;
}

/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    let result;
    if (isStartIncluded) {
        result = "[";
    } else {
        result = "(";
    }
    if (a > b) {
        result = result + b + ", " + a;
    } else {
        result = result + a + ", " + b;
    }
    if (isEndIncluded) {
        result = result + "]";
    } else {
        result = result + ")";
    }
    return result;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("");
        words[i] = words[i].reverse();
        words[i] = words[i].join("");
    }
    words = words.reverse();
    words = words.join(" ");
    return words;
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    let reversedNumber = 0;
    while (num > 0) {
        reversedNumber = reversedNumber * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNumber;
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    let ccnArray = ccn.toString().split("").reverse(),
        sum;
    ccnArray.map(function (val, index) {
        ccnArray[index] = parseInt(val);
        if (index % 2 == 1) {
            ccnArray[index] = sumOfTwoDigits(2 * ccnArray[index]);
        }
    });
    sum = 0;
    ccnArray.map(function (val) {
        sum = sum + val;
    });
    return sum % 10 === 0;
}

function sumOfTwoDigits(num) {
    let result;
    if (num % 10 === num) {
        result = num;
    } else {
        result = num % 10 + Math.floor(num / 10);
    }
    return result;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
    if (num > 9) {
        num = calculateSumOfDigits(num);
        return getDigitalRoot(num);
    }
    return num;
}

function calculateSumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    let stackArray = [],
        result = false,
        top;
    for (let i = 0; i < str.length; i++) {
        top = stackArray[stackArray.length - 1];
        if (opposite(top, str[i])) {
            stackArray.pop();
        } else {
            stackArray.push(str[i]);
        }
    }
    if (stackArray.length === 0) {
        result = true;
    }
    return result;
}

function opposite(symbol1, symbol2) {
    let result = false;
    if (symbol1 === '<' && symbol2 === '>') {
        result = true;
    } else if (symbol1 === '[' && symbol2 === ']') {
        result = true;
    } else if (symbol1 === '{' && symbol2 === '}') {
        result = true;
    } else if (symbol1 === '(' && symbol2 === ')') {
        result = true;
    }
    return result;
}

/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    let date = endDate - startDate,
        sec = 1000,
        min = 60 * sec,
        hour = 60 * min,
        day = 24 * hour,
        month = 30 * day,
        year = 12 * month,
        result;
    if (date <= 45 * sec) {
        result = 'a few seconds ago'
    }
    if (date > 45 * sec && date <= 90 * sec) {
        result = 'a minute ago'
    }
    if (date > 90 * sec && date <= 45 * min) {
        result = Math.round((date - 0.001) / min) + ' minutes ago'
    }
    if (date > 45 * min && date <= 90 * min) {
        result = 'an hour ago';
    }
    if (date > 90 * min && date <= 22 * hour) {
        result = Math.round((date - 0.001) / hour) + ' hours ago'
    }
    if (date > 22 * hour && date <= 36 * hour) {
        result = 'a day ago'
    }
    if (date > 36 * hour && date <= 25 * day) {
        result = Math.round((date - 0.001) / day) + ' days ago';
    }
    if (date > 25 * day && date <= 45 * day) {
        result = 'a month ago';
    }
    if (date > 45 * day && date <= 345 * day) {
        result = Math.round((date - 0.001) / month) + ' months ago';
    }
    if (date > 345 * day && date <= 545 * day) {
        result = 'a year ago';
    }
    if (date > 545 * day) {
        result = Math.round((date - 0.001) / year) + ' years ago';
    }
    return result;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    let result = "";
    while (num > 0) {
        result = result + num % n;
        num = Math.floor(num / n);
    }
    return result.split("").reverse().join("");
}

/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
    throw new Error("Not implemented");
    let result = "";

    function wordComplainer(a, b) {
        if (a == b && a != "") {
            result = result + "/" + a;
        } else return false
    }

    for (let i = pathes.length; i > 1; i--) {
        let a = pathes[i - 2].split('/');
        let b = pathes[i - 1].split('/');
        if (a[0] != b[0]) {
            return ""
        }

        for (let i = 0; a.length > i; i++) {
            wordComplainer(a[i], b[i]);

        }
    }

    return result + "/";
}

function commonPathBetween(commonpath, path2) {
    let newCommonPath = [],
        pathWithSmallerLength = commonpath.length > path2.length ? path2 : commonpath;
    for (let j = 0; j < pathWithSmallerLength.length; j++) {
        if (commonpath[j] === path2[j]) {
            newCommonPath.push(commonpath[j]);
        } else {
            break;
        }
    }
    return newCommonPath;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(a, b) {
    var aNumRows = a.length,
        aNumCols = a[0].length,
        bNumRows = b.length,
        bNumCols = b[0].length,
        m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0; // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    throw new Error('Not implemented');
}

module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString: getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString: timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition: evaluateTicTacToePosition
};