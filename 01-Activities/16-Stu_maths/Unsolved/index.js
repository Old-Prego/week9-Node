// TODO: Import `maths.js`
const math = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
var method = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch(method){
    case "sum":
        console.log(math.sum(a,b));
        break;
    case "difference":
        console.log(math.difference(a,b));
        break;
    case "product":
        console.log(math.product(a,b));
        break;
    case "quotient":
        console.log(math.quotient(a,b));
        break;
}
