// var arr = [1,2,3,4,5];
function arrayEquation(n,arr){

    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            evenSum += arr[i]
        }else if(arr[i] % 2 == 1){
            oddSum += arr[i]
        }
    }
    var z = (evenSum * 2) + (oddSum * 3)
    console.log(z)
}

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(arr)
    arrayEquation(n,arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    1 2 3 4 5`);
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