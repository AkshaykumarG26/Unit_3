function power(n,k){
    if (k == 0){
        return 1
    }

    if (n == 0){
        return 0
    }

    if (n == 1){
        return 1
    }

    var result = n;

    result = result * power(n, k-1);

    return result
}

// console.log(power(2,4))

function runProgram(input) {
    // Write code here
    input = input.split(" ").map(Number)
    // console.log(input)
    var n = input[0]
    var k = input[1]
    console.log(power(n,k))




   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2 4`);
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
