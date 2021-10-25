function beyondFactorial(n){
    if (n === 1){
        return 0
    }

    return Math.log(n) + beyondFactorial(n-1);
}

// console.log(beyondFactorial(3))

function runProgram(input) {
    // Write code here
    input = +input
    // console.log(input)
    console.log(beyondFactorial(input).toFixed(4))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3`);
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
