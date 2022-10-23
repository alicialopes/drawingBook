process.stdin.resume();
process.stdin.setEncoding('utf-8');

var inputString  = "";
var inputString_array = "";
var currentline = 0;

process.stdin.on('data', function (data) {
    inputString += data;
});

process.stdin.on('end', function () {
    inputString_array = inputString.split("\n");
    
    main();    
});

function readLine() {
    return inputString_array[currentline++];
}

// codigo

function main() {
    const n = parseInt(readLine());
    const p = parseInt(readLine());

    var front = Math.floor(p / 2);  
    var back = Math.floor((n - p) / 2);
        
    var result = Math.min(front, back);
    console.log(result);
}
