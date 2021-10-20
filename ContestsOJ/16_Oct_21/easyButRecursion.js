function easyButRecusrsion(arr, n){
    if (n <= 0){
        return 0
    }
    return (easyButRecusrsion(arr, n-1) + arr[n-1])
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
        console.log(easyButRecusrsion(arr, n))
        
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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