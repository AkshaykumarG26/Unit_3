function binaryEquivalent(num){

    if(num === 0){
        return 0;
    }
        return ((num%2)+10 * binaryEquivalent(parseInt(num/2)))
    

}

// console.log(binaryEquivalent(15))

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    // console.log(input)

    var testCases = +input[0];

    var line = 1;

    for (var i = 0; i < testCases; i++){
        var num = +input[line++]
        console.log(binaryEquivalent(num))
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    15
    128`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }