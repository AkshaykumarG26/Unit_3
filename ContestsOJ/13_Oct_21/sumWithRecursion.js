function sumWithRecursion(n, arr, i, out){
    if(i == n-1){
        console.log(out);
        return
    }

    out += Math.abs(arr[i]-arr[i+1]);
    sumWithRecursion(n, arr, i+1, out)
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n");
    var testCases = +input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        sumWithRecursion(n, arr, 0, 0)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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