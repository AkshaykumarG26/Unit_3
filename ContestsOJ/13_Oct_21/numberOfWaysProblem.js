function numberOfWaysProblem(n){
    if (n === 1 || n === 0){
        return 1
    }
    if(n === 2){
        return 2
    }
    return numberOfWaysProblem(n - 1) + numberOfWaysProblem(n - 2) + numberOfWaysProblem(n - 3);
}


// console.log(numberOfWaysProblem(4))

function runProgram(input) {
    // Write code here
    // console.log(input)

    var n = +input;
    console.log(numberOfWaysProblem(n))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4`);
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